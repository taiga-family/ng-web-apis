import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioChannel} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Channel', () => {
    describe('Channel', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waChannel></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly node = viewChild.required(WebAudioChannel);
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
            });
        });

        it('creates node', () => {
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            expect(testComponent.node() instanceof AudioNode).toBe(true);
        });
    });

    describe('Channel factory fallback', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waChannel></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly node = viewChild.required(WebAudioChannel);
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers,
            });
        });

        it('creates node', () => {
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            expect(testComponent.node() instanceof AudioNode).toBe(true);
        });
    });
});
