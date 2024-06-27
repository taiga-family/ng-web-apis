import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioChannelSplitter} from '../src/nodes/channel-splitter';

describe('ChannelSplitter', () => {
    describe('ChannelSplitterNode', () => {
        @Component({
            template: `
                <div waChannelSplitterNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioChannelSplitter)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof ChannelSplitterNode).toBe(true);
        });
    });

    describe('ChannelSplitterNode with providers', () => {
        @Component({
            template: `
                <div waChannelSplitterNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioChannelSplitter)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof ChannelSplitterNode).toBe(true);
        });
    });
});
