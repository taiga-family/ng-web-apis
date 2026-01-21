import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaDynamicsCompressor, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('Dynamics compressor', () => {
    describe('DynamicsCompressorNode', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waDynamicsCompressorNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaDynamicsCompressor)
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
            expect(testComponent.node instanceof DynamicsCompressorNode).toBe(true);
        });
    });

    describe('DynamicsCompressorNode factory fallback', () => {
        @Component({
            imports: [WaWebAudio],
            template: `
                <div waDynamicsCompressorNode></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            @ViewChild(WaDynamicsCompressor)
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
            expect(testComponent.node instanceof DynamicsCompressorNode).toBe(true);
        });
    });
});
