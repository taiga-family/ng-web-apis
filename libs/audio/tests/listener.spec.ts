import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaAudioContext, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Listener', () => {
    describe('AudioListener', () => {
        @Component({
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
            @ViewChild(WaAudioContext)
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
            @ViewChild(WaAudioContext)
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
});
