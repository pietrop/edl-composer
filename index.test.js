
// const EDL = require('edl_composer');
const EDL = require('./index.js');

var edlSq = {
    "title": "Demo Title of project",
    "events":  [
      { "id":1,
        "startTime": 10, // in seconds 
        "endTime": 20,
        "reelName":"SomeReelName",
        "clipName":"Something.mov",
        "offset": "00:00:28:08", //offset is optional default is "00:00:00:00"
        "fps": 25
      },
      { "id":2,
        "startTime": 45,
        "endTime": 55,
        "reelName":"SomeOtherReelName",
        "clipName":"SomethingElse.mov",
        "offset": "00:00:28:08",
        "fps": 29.97
      },
        { "id":3,
        "startTime": 45,
        "endTime": 55,
        "reelName":"NA",
        "clipName":"SomethingElse.mov",
        "offset": "00:00:28:08",
        "fps": 24
      }
    ]
}

const edlExpectedOutput = `TITLE: Demo Title of project
FCM: NON-DROP FRAME

001   SOMEREE  AA/V  C  00:00:38:08 00:00:48:08 00:00:00:00 00:00:10:00
* FROM CLIP NAME: Something.mov
FINAL CUT PRO REEL: SomeReelName REPLACED BY: SOMEREE

002   SOMEOTH  AA/V  C  00:01:13:09 00:01:23:09 00:00:09:29 00:00:19:29
* FROM CLIP NAME: SomethingElse.mov
FINAL CUT PRO REEL: SomeOtherReelName REPLACED BY: SOMEOTH

003    AX  AA/V  C  00:01:13:06 00:01:23:06 00:00:20:00 00:00:30:00
* FROM CLIP NAME: SomethingElse.mov

`;

const edlSqWithMXF = {
  "title": "Demo MXF EDL project",
  "events":  [
    { "id":1,
      "startTime": 1.62, // in seconds 
      "endTime": 11.86,
      "reelName":"NA",
      "clipName":"516_0008.MXF",
      "offset": "00:38:43:04", //offset is optional default is "00:00:00:00"
      "fps": 25//23.98
    },
    { "id":2,
      "startTime": 16.02,
      "endTime": 22.98,
      "reelName":"NA",
      "clipName":"516_0008.MXF",
      "offset": "00:38:43:04",
      "fps":23.98
    }
  ]
};

const edlExpectedOutputWithMXF = `TITLE: Demo MXF EDL project
FCM: NON-DROP FRAME

001    AX  V  C  00:38:44:19 00:38:55:00 00:00:00:00 00:00:10:06
* FROM CLIP NAME: 516_0008.MXF

002    AX  V  C  00:38:44:19 00:38:55:00 00:00:00:00 00:00:10:06
* FROM CLIP NAME: 516_0008.MXF
* AUDIO LEVEL AT 00:38:44:19 IS -8.98 DB  (REEL AX A1)
* AUDIO LEVEL AT 00:38:44:19 IS -8.98 DB  (REEL AX A2)

003    AX       NONE  C        00:38:44:19 00:38:55:00 00:00:00:00 00:00:10:06
* FROM CLIP NAME: 516_0008.MXF
* AUDIO LEVEL AT 00:38:44:19 IS -8.98 DB  (REEL AX A3)
* AUDIO LEVEL AT 00:38:44:19 IS -8.98 DB  (REEL AX A3)
AUD  3    4

004    AX  V  C  00:38:59:03 00:39:06:02 00:00:10:05 00:00:17:04
* FROM CLIP NAME: 516_0008.MXF

005    AX  V  C  00:38:59:03 00:39:06:02 00:00:10:05 00:00:17:04
* FROM CLIP NAME: 516_0008.MXF
* AUDIO LEVEL AT 00:38:59:03 IS -8.98 DB  (REEL AX A1)
* AUDIO LEVEL AT 00:38:59:03 IS -8.98 DB  (REEL AX A2)

006    AX       NONE  C        00:38:59:03 00:39:06:02 00:00:10:05 00:00:17:04
* FROM CLIP NAME: 516_0008.MXF
* AUDIO LEVEL AT 00:38:59:03 IS -8.98 DB  (REEL AX A3)
* AUDIO LEVEL AT 00:38:59:03 IS -8.98 DB  (REEL AX A3)
AUD  3    4

`

test('To return a string', () => {
    var edl = new EDL(edlSq);
    expect(typeof edl.compose()).toBe('string');
});

test('To return EDL File content', () => {
    var edl = new EDL(edlSq);
    expect(edl.compose()).toBe(edlExpectedOutput);
});


test('To return EDL File content', () => {
  var edl2 = new EDL(edlSqWithMXF);
  expect(edl2 .compose()).toBe(edlExpectedOutputWithMXF);
});