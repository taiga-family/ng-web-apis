import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs';

import {providers} from '../src/constants/fallback';
import {WebAudioDestination} from '../src/directives/destination';
import {WaWebAudio} from '../src/module';
import {WebAudioBufferSource} from '../src/sources/buffer-source';

describe('Destination', () => {
    describe('AudioDestinationNode', () => {
        @Component({
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
        })
        class Test {
            @ViewChild(WebAudioDestination)
            public node!: WebAudioDestination;

            @ViewChild(WebAudioBufferSource)
            public source!: WebAudioBufferSource;

            public quiet = false;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        const timeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            // eslint-disable-next-line jest/no-jasmine-globals
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        });

        afterEach(() => {
            // eslint-disable-next-line jest/no-jasmine-globals
            jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;
            testComponent.source.stop();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof AudioNode).toBe(true);
        });

        it('inits output', () => {
            expect(testComponent.node.quiet instanceof Observable).toBe(true);
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
            template: `
                <div waAudioDestinationNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioDestination)
            public node!: WebAudioDestination;
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

        it('works with fallback mode', () => {
            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });
});
