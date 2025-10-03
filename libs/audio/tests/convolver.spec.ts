import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioConvolver} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Convolver', () => {
    describe('ConvolverNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div
                    buffer="base/demo.mp3"
                    waConvolverNode
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioConvolver)
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
            expect(testComponent.node instanceof ConvolverNode).toBe(true);
        });
    });

    describe('ConvolverNode factory fallback', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div
                    buffer="base/demo.mp3"
                    waConvolverNode
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioConvolver)
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
            expect(testComponent.node instanceof ConvolverNode).toBe(true);
        });
    });
});
