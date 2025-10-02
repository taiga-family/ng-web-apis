import {inject, Injectable} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';

@Injectable({
    providedIn: 'root',
})
export class AudioBufferService {
    private readonly context = inject(AUDIO_CONTEXT);
    private readonly cache = new Map<string, AudioBuffer>();

    public async fetch(url: string): Promise<AudioBuffer> {
        return new Promise<AudioBuffer>((resolve, reject) => {
            if (this.cache.has(url)) {
                resolve(this.cache.get(url)!);

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
                    (buffer) => {
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
