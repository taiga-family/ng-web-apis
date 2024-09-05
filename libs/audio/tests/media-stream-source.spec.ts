import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WaWebAudio} from '../src/module';
import {WebAudioMediaStreamSource} from '../src/sources/media-stream-source';
import {CONSTRUCTOR_SUPPORT} from '../src/tokens/constructor-support';
import {MEDIA_STREAM} from '../src/tokens/media-stream';

describe('MediaStream', () => {
    const context = new AudioContext();
    const destination = new MediaStreamAudioDestinationNode(context);
    const STREAM = destination.stream;

    describe('MediaStreamAudioSourceNode', () => {
        @Component({
            standalone: true,
            template: `
                <audio waMediaStreamAudioSourceNode></audio>
            `,
        })
        class Test {
            @ViewChild(WebAudioMediaStreamSource)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
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
            template: `
                <audio waMediaStreamAudioSourceNode></audio>
            `,
        })
        class Test {
            @ViewChild(WebAudioMediaStreamSource)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
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
