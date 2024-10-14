import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioChannelSplitter} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('ChannelSplitter', () => {
    describe('ChannelSplitterNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waChannelSplitterNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioChannelSplitter)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof ChannelSplitterNode).toBe(true);
        });
    });

    describe('ChannelSplitterNode with providers', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waChannelSplitterNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioChannelSplitter)
            public node!: AudioNode;
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
            expect(testComponent.node instanceof ChannelSplitterNode).toBe(true);
        });
    });
});
