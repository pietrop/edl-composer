
// const EDL = require('edl_composer');
const fs = require('fs');
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
        { "id":2,
        "startTime": 45,
        "endTime": 55,
        "reelName":"NA",
        "clipName":"SomethingElse.mp4",
        "offset": "00:00:28:08",
        "fps": 24
      }
    ]
}


var edl = new EDL(edlSq)
const dat1 = edl.compose();
fs.writeFileSync('./sample-output/regualr.edl',dat1);
// console.log('---')
/*
* returns 

TITLE: Demo Title of project
FCM: NON-DROP FRAME

001   SOMEREE  AA/V  C  00:00:00:00 00:00:00:00 00:00:00:00 00:00:10:00
* FROM CLIP NAME: Something.mov
FINAL CUT PRO REEL: SomeReelName REPLACED BY: SOMEREE

002   SOMEOTH  AA/V  C  00:00:00:00 00:00:00:00 00:00:10:00 00:00:20:00
* FROM CLIP NAME: SomethingElse.mov
FINAL CUT PRO REEL: SomeOtherReelName REPLACED BY: SOMEOTH

002    AX  AA/V  C  00:00:00:00 00:00:00:00 00:00:20:00 00:00:30:00
* FROM CLIP NAME: SomethingElse.mov
*/

var edlSqWithMxf = {
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
    },
  //   { "id":3,
  //     "startTime": 23,
  //     "endTime": 24,
  //     "reelName":"NA",
  //     "clipName":"516_0008.MXF",
  //     "offset": "00:38:43:04",
  //     "fps":23.98
  //   },
  //   { "id":4,
  //   "startTime": 16.02,
  //   "endTime": 22.98,
  //   "reelName":"NA",
  //   "clipName":"516_0008.MXF",
  //   "offset": "00:38:43:04",
  //   "fps": 23.98
  // },
  ]
}


var edlWithMxf = new EDL(edlSqWithMxf)
const data = edlWithMxf.compose();
console.log(data)

fs.writeFileSync('./sample-output/mxfedl.edl',data);

var edlSqMixedMxf = {
  "title": "Demo MXF EDL project",
  "events":  [
    { "id":1,
      "startTime": 1.62, // in seconds 
      "endTime": 11.86,
      "reelName":"NA",
      "clipName":"516_0008.mp4",
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
    },
    { "id":3,
      "startTime": 23,
      "endTime": 24,
      "reelName":"NA",
      "clipName":"516_0008.mov",
      "offset": "00:38:43:04",
      "fps":23.98
    },
    { "id":4,
    "startTime": 16.02,
    "endTime": 22.98,
    "reelName":"NA",
    "clipName":"516_0008.MXF",
    "offset": "00:38:43:04",
    "fps": 23.98
  },
  ]
}


var edlMixedMxf = new EDL(edlSqMixedMxf)
const dataMixed = edlMixedMxf.compose();
console.log(dataMixed)

fs.writeFileSync('./sample-output/mixed-mxfedl.edl',dataMixed);