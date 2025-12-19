import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaMediaStreamDestination, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('StreamDestination', () => {
    describe('MediaStreamAudioDestinationNode', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waMediaStreamAudioDestinationNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaMediaStreamDestination)
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
            imports: [WaWebAudio],
            template: `
                <div waMediaStreamAudioDestinationNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaMediaStreamDestination)
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
});
