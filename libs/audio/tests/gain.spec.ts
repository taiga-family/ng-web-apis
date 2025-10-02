import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {
    type AudioParamInput,
    providers,
    WaWebAudio,
    WebAudioGain,
} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Audio gain', () => {
    describe('GainNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div
                    waGainNode
                    [gain]="gain"
                >
                    <div waAudioDestinationNode></div>
                </div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
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
                imports: [Test],
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
            xit('sets gain instantly', (done) => {
                testComponent.gain = 10;
                fixture.detectChanges();

                setTimeout(() => {
                    expect(testComponent.node.gain.value).toBe(10);

                    done();
                }, 100);
            });

            xit('sets gain linearly', (done) => {
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
            xit('sets gain exponentially', (done) => {
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
            xit('sets gain curve', (done) => {
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
            xit('schedules multiple changes', (done) => {
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
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waGainNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioGain)
            public node!: GainNode;
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
            expect(testComponent.node instanceof GainNode).toBe(true);
        });
    });
});
