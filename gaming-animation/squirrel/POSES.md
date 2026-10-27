# Squirrel pose plan

“Near” means the arm/leg on the visible side, drawn in brighter orange. “Far” is the darker limb behind the body. Travel is to the right. One cycle contains eight poses, 120 ms per pose (960 ms total).

| Frame | Legs and weight | Near arm / far arm | Source assignment |
| --- | --- | --- | --- |
| 01 | Far foot contacts ahead; near leg trails behind. | Near forward; far back. | Existing candidate pose-01 (same key pose as original 1.png). |
| 02 | Weight settles onto far leg; near heel folds up and knee begins recovery. | Near returning from forward toward down; far returning from back. | Existing candidate pose-02. |
| 03 | Far foot supports under pelvis; near bent knee passes forward, near foot airborne under knee. | Near beside hip, starting backward; far starting forward. | Generated individually: candidates/generated-03.png. |
| 04 | Near leg extends ahead in flight; far foot lifts behind. | Near back; far forward. | Existing candidate pose-04 (same arm direction as original 3.png). |
| 05 | Near foot contacts ahead; far leg trails behind. | Near fully back; far forward. | Generated individually: candidates/generated-05.png, using original 3.png for anatomy and pose-01 for style. The first attempt was rejected. |
| 06 | Weight settles onto near leg, near foot beneath body; far heel folds up behind. | Near returning from back toward down; far returning from forward. | Existing candidate pose-06. |
| 07 | Near foot supports under pelvis; far bent knee passes forward, far foot airborne under knee. | Near beside hip, starting forward; far starting backward. | Generated individually: candidates/generated-07.png. |
| 08 | Far leg extends ahead in flight; near foot lifts behind. | Near forward; far back. | Generated individually: candidates/generated-08.png. |

Original 2.png and 4.png both tuck the legs while holding the hands forward; they do not supply the missing opposite-arm passing poses. The earlier run-cycle.png repeats incorrect leg/arm combinations and is not used.

Deliver each pose as its own PNG in run/frame-01.png through run/frame-08.png. Preserve character scale, register the upper torso with a small vertical rise/fall, and pad every frame with transparent pixels. No runtime atlas cropping.
