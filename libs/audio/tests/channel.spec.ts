import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioChannel} from '../src/directives/channel';
import {WebAudioModule} from '../src/module';

describe('Channel', () => {
    describe('Channel', () => {
        @Component({
            template: `
                <div waChannel></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioChannel)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WebAudioModule],
                declarations: [TestComponent],
            });
        });

        it('creates node', () => {
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });

    describe('Channel factory fallback', () => {
        @Component({
            template: `
                <div waChannel></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioChannel)
            public node!: AudioNode;
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

        it('creates node', () => {
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });
});
