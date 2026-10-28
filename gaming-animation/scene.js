/* Native animation timelines: no framework, frame-swapping timers, or per-paint
   layout. Each squirrel pose is an isolated transparent image. */
(function () {
  'use strict';

  var assetRoot = new URL('./', document.currentScript.src);
  var scene = document.querySelector('.gaming-scene');
  var toggle = document.querySelector('.gaming-toggle');
  if (!scene || !toggle) return;

  function mount() {
    var animations = [];
    var images = [];
    var disposed = false;
    var loaded = false;
    var inView = false;
    var paused = false;
    var motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function addImage(parent, path, width, height) {
      var image = new Image();
      image.className = 'gaming-scene__image';
      image.alt = '';
      image.draggable = false;
      image.style.width = width + 'px';
      image.style.height = height + 'px';
      image.src = new URL(path, assetRoot).href;
      parent.appendChild(image);
      images.push(image);
      return image;
    }

    function animate(element, frames, duration, easing) {
      var animation = element.animate(frames, {
        duration: duration, iterations: Infinity, easing: easing || 'linear'
      });
      animation.pause();
      animation.currentTime = 0;
      animations.push(animation);
    }

    function scenery(selector, path, width, height, duration) {
      var strip = document.createElement('div');
      strip.className = 'gaming-scene__strip';
      scene.querySelector(selector).appendChild(strip);
      // A forward + mirrored pair has matching edges. Repeat the pair, and
      // translate exactly one pair for a seamless native timeline wrap.
      for (var i = 0; i < 4; i++) addImage(strip, path, width, height);
      animate(strip, [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-' + (width * 2) + 'px)' }
      ], duration);
    }

    function poses(selector, paths, duration, width, height) {
      var parent = scene.querySelector(selector);
      paths.forEach(function (path, index) {
        var image = addImage(parent, path, width || 32.5, height || 45);
        var frames = [];
        for (var step = 0; step <= paths.length; step++) {
          frames.push({ opacity: step % paths.length === index ? 1 : 0, offset: step / paths.length, easing: 'steps(1, end)' });
        }
        animate(image, frames, duration);
      });
    }

    function squirrel() {
      // Separate files prevent adjacent poses from bleeding into the frame.
      // Registration and body rise/fall are baked into the artwork; do not
      // translate a shared atlas behind a moving crop.
      var paths = [];
      for (var frame = 1; frame <= 8; frame++) {
        paths.push('squirrel/run/frame-0' + frame + '.png');
      }
      poses('.gaming-scene__squirrel', paths, 960, 112, 112);
    }

    scenery('.gaming-scene__sky', 'Background/sky.png', 438, 378, 220000);
    scenery('.gaming-scene__mountains', 'Background/mountain.png', 556, 480, 150000);
    scenery('.gaming-scene__forest', 'Background/trees.png', 598, 254, 34000);
    scenery('.gaming-scene__path', 'Background/foreground.png', 598, 254, 22000);
    squirrel();
    // Hold the normal card, then play the supplied highlight in travel order.
    poses('.gaming-scene__card', [
      'Card/Normal.png', 'Card/Normal.png', 'Card/Normal.png', 'Card/Normal.png',
      'Card/Normal.png', 'Card/Shimmer enters.png', 'Card/Shimmer passes.png', 'Card/Shimmer exits.png'
    ], 2800);

    function sync() {
      var running = loaded && inView && !document.hidden && !motion.matches && !paused;
      animations.forEach(function (animation) {
        if (motion.matches) animation.currentTime = 0;
        if (running) animation.play();
        else animation.pause();
      });
      toggle.hidden = !loaded || motion.matches;
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.textContent = paused ? '▶' : 'Ⅱ';
    }

    function onToggle() { paused = !paused; sync(); }
    var observer = new IntersectionObserver(function (entries) {
      inView = entries[entries.length - 1].isIntersecting;
      sync();
    });
    observer.observe(scene);
    toggle.addEventListener('click', onToggle);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);

    // Decode EVERY layer and pose before revealing or starting the scene.
    // A failed asset leaves the original, complete warning screenshot visible.
    Promise.all(images.map(function (image) { return image.decode(); })).then(function () {
      if (disposed) return;
      loaded = true;
      scene.dataset.state = 'ready';
      scene.classList.add('gaming-scene--ready');
      sync();
    }).catch(function () {
      if (!disposed) scene.dataset.state = 'error';
      /* retain the original screenshot as fallback */
    });

    function dispose() {
      disposed = true;
      observer.disconnect();
      animations.forEach(function (animation) { animation.cancel(); });
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      toggle.removeEventListener('click', onToggle);
      window.removeEventListener('pagehide', dispose);
      scene.classList.remove('gaming-scene--ready');
      toggle.hidden = true;
      scene.querySelectorAll('.gaming-scene__strip, .gaming-scene__image').forEach(function (node) { node.remove(); });
    }
    window.addEventListener('pagehide', dispose);
  }

  mount();
  window.addEventListener('pageshow', function (event) { if (event.persisted) mount(); });
})();
