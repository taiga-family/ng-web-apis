import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioOutput} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Output spec', () => {
    describe('Output', () => {
        @Component({
            standalone: true,
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
            public readonly node = viewChild.required(WebAudioOutput);
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
            expect(testComponent.node() instanceof AudioNode).toBe(true);
        });
    });

    describe('Output factory fallback', () => {
        @Component({
            standalone: true,
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
            public readonly node = viewChild.required(WebAudioOutput);
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
            expect(testComponent.node() instanceof AudioNode).toBe(true);
        });
    });
});
