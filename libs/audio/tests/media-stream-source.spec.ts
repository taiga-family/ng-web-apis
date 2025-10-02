import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {MEDIA_STREAM, WaWebAudio, WebAudioMediaStreamSource} from '@ng-web-apis/audio';
import {CONSTRUCTOR_SUPPORT} from '@ng-web-apis/audio/tokens/constructor-support';

window.onbeforeunload = jasmine.createSpy();

describe('MediaStream', () => {
    const context = new AudioContext();
    const destination = new MediaStreamAudioDestinationNode(context);
    const STREAM = destination.stream;

    describe('MediaStreamAudioSourceNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <audio waMediaStreamAudioSourceNode></audio>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioMediaStreamSource)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    {
                        provide: MEDIA_STREAM,
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
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <audio waMediaStreamAudioSourceNode></audio>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioMediaStreamSource)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    {
                        provide: MEDIA_STREAM,
                        useValue: STREAM,
                    },
                    {
                        provide: CONSTRUCTOR_SUPPORT,
                        useValue: false,
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
