import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {providers, WaWebAudio, WebAudioMediaStreamDestination} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('StreamDestination', () => {
    describe('MediaStreamAudioDestinationNode', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waMediaStreamAudioDestinationNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioMediaStreamDestination)
            public node!: MediaStreamAudioDestinationNode;
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
            expect(testComponent.node instanceof MediaStreamAudioDestinationNode).toBe(
                true,
            );
        });
    });

    describe('MediaStreamAudioDestinationNode factory fallback', () => {
        @Component({
            standalone: true,
            imports: [WaWebAudio],
            template: `
                <div waMediaStreamAudioDestinationNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WebAudioMediaStreamDestination)
            public node!: MediaStreamAudioDestinationNode;
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
            expect(testComponent.node instanceof MediaStreamAudioDestinationNode).toBe(
                true,
            );
        });
    });
});
