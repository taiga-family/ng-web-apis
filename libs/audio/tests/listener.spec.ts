import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioContext} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Listener', () => {
    describe('AudioListener', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div
                    forwardX="237"
                    forwardY="1"
                    forwardZ="2"
                    positionX="3"
                    positionY="4"
                    positionZ="5"
                    upX="6"
                    upY="7"
                    upZ="8"
                    waAudioContext
                >
                    <div waAudioDestinationNode></div>
                </div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioContext)
            public context!: AudioContext;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.context.listener instanceof AudioListener).toBe(true);
        });
    });

    describe('AudioListener factory fallback', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div
                    forwardX="237"
                    forwardY="1"
                    forwardZ="2"
                    positionX="3"
                    positionY="4"
                    positionZ="5"
                    upX="6"
                    upY="7"
                    upZ="8"
                    waAudioContext
                >
                    <div waAudioDestinationNode></div>
                </div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioContext)
            public context!: AudioContext;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers,
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.context.listener instanceof AudioListener).toBe(true);
        });
    });
});
