import {Provider} from '@angular/core';
import {UNIVERSAL_ANIMATION_FRAME} from './universal-animation-frame';
import {UNIVERSAL_CACHES} from './universal-caches';
import {UNIVERSAL_CRYPTO} from './universal-crypto';
import {UNIVERSAL_HISTORY} from './universal-history';
import {UNIVERSAL_LOCAL_STORAGE} from './universal-local-storage';
import {UNIVERSAL_LOCATION} from './universal-location';
import {UNIVERSAL_MEDIA_DEVICES} from './universal-media-devices';
import {UNIVERSAL_NAVIGATOR} from './universal-navigator';
import {UNIVERSAL_PERFORMANCE} from './universal-performance';
import {UNIVERSAL_SESSION_STORAGE} from './universal-session-storage';
import {UNIVERSAL_SPEECH_SYNTHESIS} from './universal-speech-synthesis';
import {UNIVERSAL_USER_AGENT} from './universal-user-agent';
import {UNIVERSAL_WINDOW} from './universal-window';

export const UNIVERSAL_PROVIDERS: Provider[] = [
    UNIVERSAL_ANIMATION_FRAME,
    UNIVERSAL_CACHES,
    UNIVERSAL_CRYPTO,
    UNIVERSAL_HISTORY,
    UNIVERSAL_LOCAL_STORAGE,
    UNIVERSAL_SESSION_STORAGE,
    UNIVERSAL_LOCATION,
    UNIVERSAL_MEDIA_DEVICES,
    UNIVERSAL_NAVIGATOR,
    UNIVERSAL_PERFORMANCE,
    UNIVERSAL_SPEECH_SYNTHESIS,
    UNIVERSAL_USER_AGENT,
    UNIVERSAL_WINDOW,
];
