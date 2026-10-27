# Squirrel run cycle

The active cycle uses eight **separate** transparent 512 x 512 PNG files in `run/`, in numerical order. Each pose lasts 120 ms (960 ms per full cycle). No atlas is sampled at runtime, and there is no added image translation or bounce.

- [Pose plan and source assignments](POSES.md)
- [Accepted individual generation prompts](generation-prompts.json) (built-in imagegen)
- [Scale and placement measurements](registration.json)
- [Interactive frame inspection](../preview.html)

Frames 1, 2, 4 and 6 reuse the corresponding isolated `candidates/pose-*.png` images. Frames 3, 5, 7 and 8 use individually generated `candidates/generated-*.png` images. Each selected source was uniformly scaled and placed on a padded canvas, matching head width and the supporting foot baseline. Artwork proportions were preserved.

The original `1.png` through `4.png` remain as character and anatomy references. `run-cycle.png` is the rejected earlier atlas and is not referenced by the player.

The existing pause, visibility and reduced-motion behavior is retained. On the isolated preview, numbered buttons pause on the corresponding actual animation frame; the play button resumes.
