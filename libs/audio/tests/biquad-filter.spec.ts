import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaBiquadFilter, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('BiquadFilter', () => {
    describe('BiquadFilterNode', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waBiquadFilterNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaBiquadFilter)
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
            expect(testComponent.node instanceof BiquadFilterNode).toBe(true);
        });
    });

    describe('BiquadFilterNode factory fallback', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waBiquadFilterNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaBiquadFilter)
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
            expect(testComponent.node instanceof BiquadFilterNode).toBe(true);
        });
    });
});
