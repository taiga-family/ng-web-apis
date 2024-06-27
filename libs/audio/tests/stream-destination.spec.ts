import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioMediaStreamDestination} from '../src/directives/stream-destination';
import {WaWebAudio} from '../src/module';

describe('StreamDestination', () => {
    describe('MediaStreamAudioDestinationNode', () => {
        @Component({
            template: `
                <div waMediaStreamAudioDestinationNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioMediaStreamDestination)
            public node!: MediaStreamAudioDestinationNode;
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
            expect(testComponent.node instanceof MediaStreamAudioDestinationNode).toBe(
                true,
            );
        });
    });

    describe('MediaStreamAudioDestinationNode factory fallback', () => {
        @Component({
            template: `
                <div waMediaStreamAudioDestinationNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioMediaStreamDestination)
            public node!: MediaStreamAudioDestinationNode;
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
            expect(testComponent.node instanceof MediaStreamAudioDestinationNode).toBe(
                true,
            );
        });
    });
});
