import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaBufferSource, WaDestination, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Destination', () => {
    describe('AudioDestinationNode', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div
                    autoplay
                    buffer="base/demo.mp3"
                    waAudioBufferSourceNode
                >
                    <div
                        waAudioDestinationNode
                        (quiet)="quiet = true"
                    ></div>
                </div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaDestination)
            public node!: WaDestination;

            @ViewChild(WaBufferSource)
            public source!: WaBufferSource;

            public quiet = false;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        const timeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        });

        afterEach(() => {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;
            testComponent.source.stop();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof AudioNode).toBe(true);
        });

        it('does not fire output initially', () => {
            expect(testComponent.quiet).toBe(false);
        });

        // TODO: investigate why
        xit('fires output after destination has gone silent', (done) => {
            testComponent.source.stop(testComponent.source.context.currentTime + 0.5);
            setTimeout(() => {
                fixture.detectChanges();

                expect(testComponent.quiet).toBe(true);

                done();
            }, 6000);
        });
    });

    describe('AudioDestinationNode factory fallback', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waAudioDestinationNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaDestination)
            public node!: WaDestination;
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

        it('works with fallback mode', () => {
            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });
});
