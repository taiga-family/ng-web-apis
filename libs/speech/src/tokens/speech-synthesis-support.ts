import {inject, InjectionToken} from '@angular/core';
import {WA_SPEECH_SYNTHESIS} from '@ng-web-apis/common';

export const WA_SPEECH_SYNTHESIS_SUPPORT = new InjectionToken<boolean>(
    '[WA_SPEECH_SYNTHESIS_SUPPORT]',
    {factory: () => !!inject(WA_SPEECH_SYNTHESIS)},
);
