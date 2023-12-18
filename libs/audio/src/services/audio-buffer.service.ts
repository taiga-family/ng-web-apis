import {Inject, Injectable} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';

@Injectable({
    providedIn: 'root',
})
export class AudioBufferService {
    private readonly cache = new Map<string, AudioBuffer>();

    constructor(@Inject(AUDIO_CONTEXT) private readonly context: BaseAudioContext) {}

    async fetch(url: string): Promise<AudioBuffer> {
        return new Promise<AudioBuffer>((resolve, reject) => {
            if (this.cache.has(url)) {
                resolve(this.cache.get(url) as AudioBuffer);

                return;
            }

            const request = new XMLHttpRequest();

            request.open('GET', url, true);
            request.responseType = 'arraybuffer';
            request.onerror = reject;
            request.onabort = reject;

            request.onload = () => {
                void this.context.decodeAudioData(
                    request.response,
                    buffer => {
                        this.cache.set(url, buffer);
                        resolve(buffer);
                    },
                    reject,
                );
            };

            request.send();
        });
    }
}
