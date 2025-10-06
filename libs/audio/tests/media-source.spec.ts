import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioMediaSource} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('MediaSource', () => {
    describe('MediaElementAudioSourceNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <audio waMediaElementAudioSourceNode></audio>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly node = viewChild.required(WebAudioMediaSource);
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
            expect(testComponent.node() instanceof MediaElementAudioSourceNode).toBe(
                true,
            );
        });
    });

    describe('MediaElementAudioSourceNode factory fallback', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <audio waMediaElementAudioSourceNode></audio>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly node = viewChild.required(WebAudioMediaSource);
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
            expect(testComponent.node() instanceof MediaElementAudioSourceNode).toBe(
                true,
            );
        });
    });
});
