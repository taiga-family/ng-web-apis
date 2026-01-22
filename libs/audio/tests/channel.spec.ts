import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaChannel, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Channel', () => {
    describe('Channel', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waChannel></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaChannel)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({imports: [Test]});
        });

        it('creates node', () => {
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });

    describe('Channel factory fallback', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waChannel></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaChannel)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({imports: [Test]});
        });

        it('creates node', () => {
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });
});
