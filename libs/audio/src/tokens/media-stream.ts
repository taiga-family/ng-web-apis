import {InjectionToken} from '@angular/core';

export const WA_MEDIA_STREAM = new InjectionToken<MediaStream>(
    '[WA_MEDIA_STREAM]: MediaStream for MediaStreamAudioSourceNode',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MEDIA_STREAM}
 */
export const MEDIA_STREAM = WA_MEDIA_STREAM;
