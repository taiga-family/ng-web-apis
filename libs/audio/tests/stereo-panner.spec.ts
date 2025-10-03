import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioStereoPanner} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('StereoPanner', () => {
    describe('StereoPannerNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waStereoPannerNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioStereoPanner)
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
            expect(testComponent.node instanceof StereoPannerNode).toBe(true);
        });
    });

    describe('StereoPannerNode factory fallback', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waStereoPannerNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioStereoPanner)
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
            expect(testComponent.node instanceof StereoPannerNode).toBe(true);
        });
    });
});
