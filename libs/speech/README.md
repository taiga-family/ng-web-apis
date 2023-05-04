# ![ng-web-apis logo](logo.svg) Web Speech API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/speech.svg)](https://npmjs.com/package/@ng-web-apis/speech)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/speech)](https://bundlephobia.com/result?p=@ng-web-apis/speech)

This is a library to use [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/ng-web-apis/common):

```
npm i @ng-web-apis/common
```

Now install the package:

```
npm i @ng-web-apis/speech
```

## How to use

Web Speech API consists of speech synthesis and speech recognition.

1. Use `SpeechSynthesisModule` to gain access to `TextToSpeechDirective` and `UtterancePipe`. Use them like the example
   below for speech synthesis functionality:

```html
<textarea
  class="textarea"
  [waTextToSpeech]="text | waUtterance: options"
  [waTextToSpeechPaused]="paused"
  [(ngModel)]="text"
  (waTextToSpeechEnd)="onEnd()"
/>
```

2. For speech recognition use `SpeechRecognitionService` in supporting browsers (only Chrome at this point)

## Operators

`SpeechRecognitionService` provides access to speech recognition in familiar RxJS Observable model. To work with the
stream there are certain operators included in this library:

1. `confidenceAbove` to filter recognitions to desired level of confidence
2. `continuous` to enable continuous mode of recognition
3. `final` to only include final recognition results
4. `firstAlternative` to quickly retrieve first alternative (which typically is the only one anyway)
5. `skipUntilSaid` to ignore stream until certain phrase is said
6. `takeUntilSaid` to stop listening to stream upon certain phrase
7. `isSaid` utility function to check if a phrase is in `SpeechRecognitionResult[]`

You may want to use `repeat()` and `retry()` in your stream to restart speech recognition. It is stopped after some time
and error is thrown if nothing was said for a while.

Here are a few examples:

```ts
// Record speech after "Okay Angular" is said
this.stream$ = this.speechRecognition$.pipe(
  retry(),
  repeat(),
  skipUntilSaid('Okay Angular'),
  takeUntilSaid('Thank you Angular'),
  repeat(),
  final(),
  continuous(),
);
```

```ts
// Fire photon torpedoes with a voice command
this.torpedoes$ = this.speechRecognition$.pipe(retry(), repeat(), filter(isSaid('Fire photon torpedoes')));
```

## Tokens

There are also a couple of tokens included in this library:

1. `SPEECH_RECOGNITION_MAX_ALTERNATIVES` to configure number of alternatives presented in `SpeechRecognitionResult`
2. `SPEECH_RECOGNITION_SUPPORT` to check if browser supports speech recognition
3. `SPEECH_SYNTHESIS_SUPPORT` to check if browser supports speech synthesis
4. `SPEECH_SYNTHESIS_VOICES` to get the list of available voices for speech synthesis

## See also

Other [Web APIs for Angular](https://ng-web-apis.github.io/) by [@ng-web-apis](https://github.com/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work? Check out this
[Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter) we’ve created
for our projects. It got you covered on continuous integration, pre-commit checks, linting, versioning + changelog, code
coverage and all that jazz.
