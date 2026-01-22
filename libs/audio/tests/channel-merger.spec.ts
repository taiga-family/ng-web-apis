import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaChannelMerger, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('ChannelMerger', () => {
    describe('ChannelMergerNode', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waChannelMergerNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaChannelMerger)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({imports: [Test]});

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
            imports: [WaWebAudio],
            template: `
                <div waChannelMergerNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaChannelMerger)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({imports: [Test]});

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof ChannelMergerNode).toBe(true);
        });
    });
});
