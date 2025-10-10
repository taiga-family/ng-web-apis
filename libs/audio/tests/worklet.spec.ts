import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {
    AUDIO_WORKLET_PROCESSORS,
    AUDIO_WORKLET_PROCESSORS_READY,
    WaWebAudio,
    WebAudioWorklet,
} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('AudioWorkletNode', () => {
    @Component({
        standalone: true,
        imports: [AsyncPipe, WaWebAudio],
        template: `
            @let ready = ready$ | async;

            @if (ready) {
                <div
                    name="test"
                    waAudioWorkletNode
                ></div>
            }
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected readonly ready$ = inject(AUDIO_WORKLET_PROCESSORS_READY);

        public readonly node = viewChild.required(WebAudioWorklet);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [Test],
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
    xit('creates node', () => {
        expect(testComponent.node() instanceof AudioWorkletNode).toBe(true);
    });
});
