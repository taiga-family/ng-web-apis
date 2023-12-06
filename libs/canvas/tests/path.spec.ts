import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CanvasModule} from '../src/module';
import {CANVAS_2D_CONTEXT} from '../src/tokens/canvas-2d-context';

describe(`Path`, () => {
    @Component({
        template: `
            <canvas
                #canvas
                height="100"
                waCanvas2d
                width="100"
            >
                <canvas-path fillStyle="red">
                    <canvas-arc></canvas-arc>
                    <canvas-arc-to></canvas-arc-to>
                    <canvas-bezier-curve-to></canvas-bezier-curve-to>
                    <canvas-ellipse></canvas-ellipse>
                    <canvas-line-to></canvas-line-to>
                    <canvas-move-to></canvas-move-to>
                    <canvas-quadratic-curve-to></canvas-quadratic-curve-to>
                    <canvas-rect
                        [height]="20"
                        [width]="20"
                        [x]="0"
                        [y]="0"
                    ></canvas-rect>
                </canvas-path>
            </canvas>
        `,
    })
    class TestComponent {
        @ViewChild(`canvas`, {read: CANVAS_2D_CONTEXT})
        readonly context!: CanvasRenderingContext2D;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CanvasModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`draws path`, done => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(0, 0, 1, 1).data]).toEqual([
                255, 0, 0, 255,
            ]);
            done();
        }, 50);
    });
});
