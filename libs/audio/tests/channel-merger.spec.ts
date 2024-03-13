import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioChannelMerger} from '../src/nodes/channel-merger';

describe('ChannelMerger', () => {
    describe('ChannelMergerNode', () => {
        @Component({
            template: `
                <div waChannelMergerNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioChannelMerger)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof ChannelMergerNode).toBe(true);
        });
    });

    describe('ChannelMergerNode factory fallback', () => {
        @Component({
            template: `
                <div waChannelMergerNode></div>
            `,
        })
        class TestComponent {
            @ViewChild(WebAudioChannelMerger)
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

            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof ChannelMergerNode).toBe(true);
        });
    });
});
