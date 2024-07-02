import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioGain} from '../src/nodes/gain';
import type {AudioParamInput} from '../src/types/audio-param-input';

describe('Audio gain', () => {
    describe('GainNode', () => {
        @Component({
            template: `
                <div
                    waGainNode
                    [gain]="gain"
                >
                    <div waAudioDestinationNode></div>
                </div>
            `,
        })
        class Test {
            @ViewChild(WebAudioGain)
            public node!: GainNode;

            public gain: AudioParamInput = 1;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof GainNode).toBe(true);
        });

        describe('AudioParam', () => {
            // TODO: need investigate why
            it.skip('sets gain instantly', (done) => {
                testComponent.gain = 10;
                fixture.detectChanges();

                setTimeout(() => {
                    expect(testComponent.node.gain.value).toBe(10);
                    done();
                }, 100);
            });

            it.skip('sets gain linearly', (done) => {
                testComponent.gain = {
                    value: 10,
                    duration: 2,
                    mode: 'linear',
                };
                fixture.detectChanges();

                setTimeout(() => {
                    expect(
                        testComponent.node.gain.value < 6 &&
                            testComponent.node.gain.value > 4,
                    ).toBe(true);
                    setTimeout(() => {
                        expect(Math.round(testComponent.node.gain.value)).toBe(10);
                        done();
                    }, 1000);
                }, 1000);
            });

            // TODO: need investigate why
            it.skip('sets gain exponentially', (done) => {
                testComponent.gain = {
                    value: 10,
                    duration: 2,
                    mode: 'exponential',
                };
                fixture.detectChanges();

                setTimeout(() => {
                    expect(
                        testComponent.node.gain.value < 4 &&
                            testComponent.node.gain.value > 2,
                    ).toBe(true);
                    setTimeout(() => {
                        expect(Math.round(testComponent.node.gain.value)).toBe(10);
                        done();
                    }, 1000);
                }, 1000);
            });

            // TODO: need investigate why
            it.skip('sets gain curve', (done) => {
                testComponent.gain = {
                    value: [10, 5, 10],
                    duration: 2,
                };
                fixture.detectChanges();

                setTimeout(() => {
                    expect(
                        testComponent.node.gain.value < 6 &&
                            testComponent.node.gain.value > 4,
                    ).toBe(true);
                    setTimeout(() => {
                        expect(Math.round(testComponent.node.gain.value)).toBe(10);
                        done();
                    }, 1500);
                }, 1000);
            });

            // TODO: need investigate why
            it.skip('schedules multiple changes', (done) => {
                testComponent.gain = [
                    {
                        value: 5,
                        duration: 2,
                        mode: 'instant',
                    },
                    {
                        value: 10,
                        duration: 2,
                        mode: 'linear',
                    },
                ];
                fixture.detectChanges();

                setTimeout(() => {
                    expect(
                        testComponent.node.gain.value < 6 &&
                            testComponent.node.gain.value > 4,
                    ).toBe(true);
                    setTimeout(() => {
                        expect(
                            testComponent.node.gain.value < 9 &&
                                testComponent.node.gain.value > 7,
                        ).toBe(true);
                        setTimeout(() => {
                            expect(Math.round(testComponent.node.gain.value)).toBe(10);
                            done();
                        }, 1500);
                    }, 2000);
                }, 1000);
            });
        });
    });

    describe('GainNode factory fallback', () => {
        @Component({
            template: `
                <div waGainNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioGain)
            public node!: GainNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
                providers,
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof GainNode).toBe(true);
        });
    });
});
