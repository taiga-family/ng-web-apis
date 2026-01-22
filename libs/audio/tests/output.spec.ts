import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaOutput, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Output spec', () => {
    describe('Output', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div [waOutput]="destination"></div>
                <div
                    #destination="AudioNode"
                    waAudioDestinationNode
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaOutput)
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
            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });

    describe('Output factory fallback', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div [waOutput]="destination"></div>
                <div
                    #destination="AudioNode"
                    waAudioDestinationNode
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaOutput)
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
            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });
});
