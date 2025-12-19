import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WA_MEDIA_STREAM, WaMediaStreamSource, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('MediaStream', () => {
    const context = new AudioContext();
    const destination = new MediaStreamAudioDestinationNode(context);
    const STREAM = destination.stream;

    describe('MediaStreamAudioSourceNode', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <audio waMediaStreamAudioSourceNode></audio>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaMediaStreamSource)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    {
                        provide: WA_MEDIA_STREAM,
                        useValue: STREAM,
                    },
                ],
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof MediaStreamAudioSourceNode).toBe(true);
        });
    });

    describe('MediaStreamAudioSourceNode factory fallback', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <audio waMediaStreamAudioSourceNode></audio>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaMediaStreamSource)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    {
                        provide: WA_MEDIA_STREAM,
                        useValue: STREAM,
                    },
                ],
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof MediaStreamAudioSourceNode).toBe(true);
        });
    });
});
