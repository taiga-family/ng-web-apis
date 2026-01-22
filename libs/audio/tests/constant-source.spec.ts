import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaConstantSource, WaWebAudio} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('ConstantSourceNode', () => {
    @Component({
        imports: [WaWebAudio],
        template: `
            <div waConstantSourceNode></div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(WaConstantSource)
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
        expect(testComponent.node instanceof ConstantSourceNode).toBe(true);
    });
});
