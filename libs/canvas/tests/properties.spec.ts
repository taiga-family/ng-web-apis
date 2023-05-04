import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CanvasModule} from '../src/module';
import {CANVAS_2D_CONTEXT} from '../src/tokens/canvas-2d-context';

describe('Properties', () => {
    @Component({
        template: `
            <canvas #canvas waCanvas2d width="100" height="100">
                <canvas-clip-path #clip>
                    <canvas-rect [x]="5" [y]="5" [width]="20" [height]="20"></canvas-rect>
                </canvas-clip-path>
                <canvas-path fillStyle="red" [clip]="clip">
                    <canvas-rect [x]="0" [y]="0" [height]="20" [width]="20"></canvas-rect>
                </canvas-path>
                <canvas-path fillStyle="green" globalCompositeOperation="screen">
                    <canvas-rect [x]="0" [y]="0" [height]="20" [width]="20"></canvas-rect>
                </canvas-path>
                <canvas-path
                    lineCap="round"
                    lineJoin="round"
                    imageSmoothingQuality="high"
                    shadowColor="pink"
                    [clip]="'L 1 1' | path"
                    [imageSmoothingEnabled]="false"
                >
                    <canvas-rect [x]="0" [y]="0" [height]="20" [width]="20"></canvas-rect>
                </canvas-path>
            </canvas>
        `,
    })
    class TestComponent {
        @ViewChild('canvas', {read: CANVAS_2D_CONTEXT})
        readonly context!: CanvasRenderingContext2D;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CanvasModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('clipping works', done => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(0, 0, 1, 1).data]).toEqual([
                0, 128, 0, 255,
            ]);
            done();
        }, 50);
    });

    it('overlays layers with given mode', done => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(10, 10, 1, 1).data]).toEqual([
                255, 128, 0, 255,
            ]);
            done();
        }, 50);
    });
});
