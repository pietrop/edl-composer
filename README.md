## Edl Composer

The EDL composer node module can be used to create Edit Decision List. 
EDL, Edit Decision List, is a plain text format that describes a video sequence. It can be opened in a video editing software to reconnect media to assemble a video sequence. Originally extracted from autoEdit.io


## Setup

### Setup for Contributing 

Clone the repo
 
```
git clone git@github.com:pietrop/edl_composer.git
```

Install dependencies 
```
npm install
```

And if you want to try it out 

```
node example-usage.js
```

### Setup for usage

To use in your project, the module can be found on [npm as `edl_composer`](https://www.npmjs.com/package/edl_composer)
so just run the following to add to your project. 

```
npm install @pietrop/edl-composer
```

## Usage


The EDL sequence should have the following attributes

```javascript
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
        "clipName":"SomethingElse.mov",
        "offset": "00:00:28:08",
        "fps": 24
      }
    ]
}
```

And it can be parsed and composed into an EDL as following. 

```javascript

var edl = new EDL(edlSq);
console.log(edl.compose());
```

This returns a string that you can write to file or else.

```
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

```

## System Architecture
_High level overview of system architecture_

See docs guides [understanding edl specs](./docs/guides/understanding-edl-specs.md)

## Development env
 _How to run the development environment_
_Coding style convention ref optional, eg which linter to use_
_Linting, github pre-push hook - optional_

- node
- npm 

## Build
_How to run build_

No build step 
 

## Tests
_How to carry out tests_

Minimal test using jest

```
npm test
```
 

## Deployment
_How to deploy the code/app into test/staging/production_

No deployment just a node module 


