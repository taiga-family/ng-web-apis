import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioChannelMerger} from '../src/nodes/channel-merger';

describe('ChannelMerger', () => {
    describe('ChannelMergerNode', () => {
        @Component({
            template: `
                <div waChannelMergerNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioChannelMerger)
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
            expect(testComponent.node instanceof ChannelMergerNode).toBe(true);
        });
    });

    describe('ChannelMergerNode factory fallback', () => {
        @Component({
            template: `
                <div waChannelMergerNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioChannelMerger)
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
            expect(testComponent.node instanceof ChannelMergerNode).toBe(true);
        });
    });
});
