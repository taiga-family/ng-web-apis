import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioContext} from '../src/directives/audio-context';
import {WebAudioModule} from '../src/module';

describe(`Listener`, () => {
    describe(`AudioListener`, () => {
        @Component({
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
        })
        class TestComponent {
            @ViewChild(WebAudioContext)
            context!: AudioContext;
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WebAudioModule],
                declarations: [TestComponent],
            });

            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it(`creates node`, () => {
            expect(testComponent.context.listener instanceof AudioListener).toBe(true);
        });
    });

    describe(`AudioListener factory fallback`, () => {
        @Component({
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
        })
        class TestComponent {
            @ViewChild(WebAudioContext)
            context!: AudioContext;
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WebAudioModule],
                declarations: [TestComponent],
                providers,
            });

            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it(`creates node`, () => {
            expect(testComponent.context.listener instanceof AudioListener).toBe(true);
        });
    });
});
