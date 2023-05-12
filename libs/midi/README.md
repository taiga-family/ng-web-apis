# ![ng-web-apis logo](logo.svg) Web MIDI API for Angular

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/midi.svg)](https://npmjs.com/package/@ng-web-apis/midi)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/midi)](https://bundlephobia.com/result?p=@ng-web-apis/midi)
[![Coveralls github](https://img.shields.io/coveralls/github/ng-web-apis/midi)](https://coveralls.io/github/ng-web-apis/midi?branch=master)

This library contains abstractions and helpful utils to use [Web MIDI API](https://www.w3.org/TR/webmidi) idiomatically
with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/tinkoff/ng-web-apis/tree/main/libs/common):

```
npm i @ng-web-apis/common
```

You would also need `@types/webmidi` package until it is included in TypeScript. Now install the package:

```
npm i @ng-web-apis/midi
```

## Usage

To use [Web MIDI API](https://www.w3.org/TR/webmidi) with your Angular application you can use tokens, RxJs operators
and utils included with this package:

### Tokens

- `MIDI_SUPPORT` — `boolean` value checking browser support
- `SYSEX` — `boolean` token responsible for system exclusive access, `false` by default
- `MIDI_ACCESS` — a [Promise](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  with [MIDIAccess](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess) object, depends on `SYSEX` token for
  access level
- `MIDI_INPUT` — a [Promise](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise) with
  [MIDIInput](https://developer.mozilla.org/en-US/docs/Web/API/MIDIInput). You would need to provide it yourself see
  utility functions below
- `MIDI_OUTPUT` — a [Promise](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  with [MIDIOutput](https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutput). You would need to provide it yourself
  see utility functions below
- `MIDI_MESSAGES` — an Observable of
  [MIDIMessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MIDIMessageEvent) from all
  [MIDIInputs](https://developer.mozilla.org/en-US/docs/Web/API/MIDIInput), use rxjs function below to narrow and
  process the stream

### Utility functions

- You can provide `MIDI_INPUT` and `MIDI_OUTPUT` tokens with following functions:

  `inputById`, `inputByName`, `outputById`, `outputByName`:

```typescript
import {Component, Inject} from '@angular/core';
import {inputById, MIDI_INPUT, MIDI_OUTPUT, outputByName} from '@ng-web-apis/midi';

@Component({
  selector: 'my-comp',
  template: '...',
  providers: [inputById('input-0'), outputByName('VirtualMIDISynth')],
})
export class MyComponent {
  constructor(@Inject(MIDI_INPUT) input: Promise<MIDIInput>, @Inject(MIDI_OUTPUT) output: Promise<MIDIOutput>) {}
}
```

- You can convert MIDI note to frequency and back using `toFrequency` and `toNote` functions. They optionally accept
  second argument for tuning of middle A note using 440 as default value
- You can use `frequency` pipe from `FrequencyPipeModule` to convert MIDI note to frequency directly in template

### RxJs operators

#### Monotype operators

These are filtering operators which you can use on `MIDI_MESSAGES` stream to narrow it to your needs. All of them are
applied like that:

```typescript
messages$.pipe(filterByChannel(1), aftertouch());
```

- `filterByChannel` only lets through messages from given channel **(0 to 15)**
- `filterById` only lets through messages from particular
  [MIDIInput](https://developer.mozilla.org/en-US/docs/Web/API/MIDIInput) identifying it by `id` property
- `filterByName` only lets through messages from particular
  [MIDIInput](https://developer.mozilla.org/en-US/docs/Web/API/MIDIInput) identifying it by `name` property
- `notes` only lets through played notes messages, **normalizing noteOff messages to noteOn with 0 velocity**
- `aftertouch` only lets through aftertouch messages, same logic goes fow all functions below
- `modulationWheel`
- `pan`
- `pitchBend`
- `polyphonicAftertouch`
- `programChange`
- `sustainPedal`

If you believe other operators could be helpful, please [file an issue](https://github.com/tinkoff/ng-web-apis/issues)
explaining what would you like to be added and why.

### Operators

These are used to convert message to something necessary for you, since it turns
[MIDIMessageEvents](https://developer.mozilla.org/en-US/docs/Web/API/MIDIMessageEvent) to different objects, use it
**after** all monotype operations from the list above have been applied.

- `toData` — extracts `data`
  [Uint8Array](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) from each
  [MIDIMessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MIDIMessageEvent)
- `toTime` — extracts `receivedTime` timestamp from each
  [MIDIMessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MIDIMessageEvent)
- `toStatusByte` — extracts first element from `data`
  [Uint8Array](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- `toDataByte` — extracts second element from `data`
  [Uint8Array](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- `toValueByte` — extracts third element from `data`
  [Uint8Array](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

> Keep in mind some messages might not contain third or even second byte so only use those extractions when you are sure
> (i.e. filtered the stream to compliant messages beforehand).

## Demo

You can [try online demo here](https://stackblitz.com/github/ng-web-apis/midi/tree/master/projects/demo)

## See also

Other [Web APIs for Angular](https://tinkoff.github.io/ng-web-apis/) by
[@ng-web-apis](https://github.com/tinkoff/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work? Check out this
[Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter) we’ve created
for our projects. It got you covered on continuous integration, pre-commit checks, linting, versioning + changelog, code
coverage and all that jazz.
