import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {CanvasModule} from '../src/module';
import {CANVAS_2D_CONTEXT} from '../src/tokens/canvas-2d-context';

describe('Properties', () => {
    @Component({
        standalone: true,
        template: `
            <canvas
                #canvas
                height="100"
                waCanvas2d
                width="100"
            >
                <canvas-clip-path #clip>
                    <canvas-rect
                        [height]="20"
                        [width]="20"
                        [x]="5"
                        [y]="5"
                    ></canvas-rect>
                </canvas-clip-path>
                <canvas-path
                    fillStyle="red"
                    [clip]="clip"
                >
                    <canvas-rect
                        [height]="20"
                        [width]="20"
                        [x]="0"
                        [y]="0"
                    ></canvas-rect>
                </canvas-path>
                <canvas-path
                    fillStyle="green"
                    globalCompositeOperation="screen"
                >
                    <canvas-rect
                        [height]="20"
                        [width]="20"
                        [x]="0"
                        [y]="0"
                    ></canvas-rect>
                </canvas-path>
                <canvas-path
                    imageSmoothingQuality="high"
                    lineCap="round"
                    lineJoin="round"
                    shadowColor="pink"
                    [clip]="'L 1 1' | path"
                    [imageSmoothingEnabled]="false"
                >
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
    class Test {
        @ViewChild('canvas', {read: CANVAS_2D_CONTEXT})
        public readonly context!: CanvasRenderingContext2D;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CanvasModule],
            declarations: [Test],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('clipping works', (done) => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(0, 0, 1, 1).data]).toEqual([
                0, 128, 0, 255,
            ]);

            done();
        }, 50);
    });

    it('overlays layers with given mode', (done) => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(10, 10, 1, 1).data]).toEqual([
                255, 128, 0, 255,
            ]);

            done();
        }, 50);
    });
});
