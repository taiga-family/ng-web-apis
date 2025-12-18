import {inject, InjectionToken} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';

export const WA_MIDI_SUPPORT = new InjectionToken<boolean>('[WA_MIDI_SUPPORT]', {
    factory: () => !!inject(WA_NAVIGATOR).requestMIDIAccess,
});
