import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {AudioParamInput} from '../src/types/audio-param-input';
import {WebAudioGain} from '../src/nodes/gain';

describe('GainNode', () => {
    @Component({
        template: `
            <div waGainNode [gain]="gain">
                <div waAudioDestinationNode></div>
            </div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioGain)
        node!: GainNode;

        gain: AudioParamInput = 1;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof GainNode).toBe(true);
    });

    describe('AudioParam', () => {
        it('sets gain instantly', done => {
            testComponent.gain = 10;
            fixture.detectChanges();

            setTimeout(() => {
                expect(testComponent.node.gain.value).toBe(10);
                done();
            }, 100);
        });

        it('sets gain linearly', done => {
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
        xit('sets gain exponentially', done => {
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

        it('sets gain curve', done => {
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

        it('schedules multiple changes', done => {
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
    class TestComponent {
        @ViewChild(WebAudioGain)
        node!: GainNode;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
            providers,
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof GainNode).toBe(true);
    });
});
