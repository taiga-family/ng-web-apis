import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioMediaStreamDestination} from '../src/directives/stream-destination';
import {WebAudioModule} from '../src/module';

describe('StreamDestination', () => {
    describe('MediaStreamAudioDestinationNode', () => {
        @Component({
            template: `
                <div waMediaStreamAudioDestinationNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioMediaStreamDestination)
            public node!: MediaStreamAudioDestinationNode;
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
        class TestComponent {
            @ViewChild(WebAudioMediaStreamDestination)
            public node!: MediaStreamAudioDestinationNode;
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

        it('creates node', () => {
            expect(testComponent.node instanceof MediaStreamAudioDestinationNode).toBe(
                true,
            );
        });
    });
});
