import {Component, inject, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WaWebAudio} from '../src/module';
import {WebAudioWorklet} from '../src/nodes/worklet';
import {AUDIO_WORKLET_PROCESSORS} from '../src/tokens/audio-worklet-processors';
import {AUDIO_WORKLET_PROCESSORS_READY} from '../src/tokens/audio-worklet-processors-ready';

describe('AudioWorkletNode', () => {
    @Component({
        standalone: true,
        template: `
            <div
                *ngIf="ready | async"
                name="test"
                waAudioWorkletNode
            ></div>
        `,
    })
    class Test {
        protected readonly ready = inject(AUDIO_WORKLET_PROCESSORS_READY);

        @ViewChild(WebAudioWorklet)
        public node!: AudioNode;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [WaWebAudio],
            declarations: [Test],
            providers: [
                {
                    provide: AUDIO_WORKLET_PROCESSORS,
                    useValue: ['base/test.js'],
                },
            ],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        setTimeout(() => {
            fixture.detectChanges();
            done();
        }, 100);
    });

    // TODO: need investigate why
    it.skip('creates node', () => {
        expect(testComponent.node instanceof AudioWorkletNode).toBe(true);
    });
});
