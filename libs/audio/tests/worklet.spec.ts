import {Component, inject, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WebAudioModule} from '../src/module';
import {WebAudioWorklet} from '../src/nodes/worklet';
import {AUDIO_WORKLET_PROCESSORS} from '../src/tokens/audio-worklet-processors';
import {AUDIO_WORKLET_PROCESSORS_READY} from '../src/tokens/audio-worklet-processors-ready';

describe('AudioWorkletNode', () => {
    @Component({
        template: `
            <div
                *ngIf="ready | async"
                name="test"
                waAudioWorkletNode
            ></div>
        `,
    })
    class TestComponent {
        protected readonly ready = inject(AUDIO_WORKLET_PROCESSORS_READY);

        @ViewChild(WebAudioWorklet)
        public node!: AudioNode;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(done => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: AUDIO_WORKLET_PROCESSORS,
                    useValue: ['base/test.js'],
                },
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        setTimeout(() => {
            fixture.detectChanges();
            done();
        }, 100);
    });

    // TODO: need investigate why
    xit('creates node', () => {
        expect(testComponent.node instanceof AudioWorkletNode).toBe(true);
    });
});
