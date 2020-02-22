# EDL for MXF File
reverse engigneering it 

## EDL example 1
example EDL from this module

```
TITLE: mxf test
FCM: NON-DROP FRAME

001    AX  AA/V  C  00:00:00:00 00:00:00:00 00:00:00:00 00:00:10:05
* FROM CLIP NAME: 516_0008.MXF

002    AX  AA/V  C  00:00:00:00 00:00:00:00 00:00:10:05 00:00:17:04
* FROM CLIP NAME: 516_0008.MXF
```
## EDL MXF - Adobe premiere 

example EDL of same sequence, exported by Adobe Premiere
```
TITLE: PBS Frontline FB Doc
FCM: DROP FRAME

001  AX       V     C        00:38:44:17 00:38:55:00 00:00:00:00 00:00:10:08
* FROM CLIP NAME: 516_0008.MXF

002  AX       AA    C        00:38:44:17 00:38:55:00 00:00:00:00 00:00:10:08
* FROM CLIP NAME: 516_0008.MXF
* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A1)
* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A2)

003  AX       NONE  C        00:38:44:17 00:38:55:00 00:00:00:00 00:00:10:08
* FROM CLIP NAME: 516_0008.MXF
* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A3)
* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A4)
AUD  3    4

004  AX       V     C        00:38:59:04 00:39:06:01 00:00:10:08 00:00:17:05
* FROM CLIP NAME: 516_0008.MXF

005  AX       AA    C        00:38:59:04 00:39:06:01 00:00:10:08 00:00:17:05
* FROM CLIP NAME: 516_0008.MXF
* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A1)
* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A2)

006  AX       NONE  C        00:38:59:04 00:39:06:01 00:00:10:08 00:00:17:05
* FROM CLIP NAME: 516_0008.MXF
* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A3)
* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A4)
AUD  3    4
```

It seems like EDL for MXF has 3 items for clip. One video and two audio.

As well as some differences in the type of cut due to  audio and video being addressed separately.

```diff
-001    AX  AA/V  C        00:00:00:00 00:00:00:00 00:00:00:00 00:00:10:05
+001    AX    V   C        00:38:44:17 00:38:55:00 00:00:00:00 00:00:10:08
* FROM CLIP NAME: 516_0008.MXF

+002  AX       AA    C        00:38:44:17 00:38:55:00 00:00:00:00 00:00:10:08
+* FROM CLIP NAME: 516_0008.MXF
+* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A1)
+* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A2)

+003  AX       NONE  C        00:38:44:17 00:38:55:00 00:00:00:00 00:00:10:08
+* FROM CLIP NAME: 516_0008.MXF
+* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A3)
+* AUDIO LEVEL AT 00:38:43:04 IS -8.98 DB  (REEL AX A4)
+AUD  3    4
```

In the module we added a check for .mxf in file extension of clip name to compose the right clip line for an MXF.