import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioChannelMerger} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('ChannelMerger', () => {
    describe('ChannelMergerNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waChannelMergerNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly node = viewChild.required(WebAudioChannelMerger);
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
            expect(testComponent.node() instanceof ChannelMergerNode).toBe(true);
        });
    });

    describe('ChannelMergerNode factory fallback', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waChannelMergerNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly node = viewChild.required(WebAudioChannelMerger);
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
            expect(testComponent.node() instanceof ChannelMergerNode).toBe(true);
        });
    });
});
