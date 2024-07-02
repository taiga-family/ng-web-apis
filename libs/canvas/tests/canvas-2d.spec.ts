import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {CanvasModule} from '../src/module';
import {CANVAS_2D_CONTEXT} from '../src/tokens/canvas-2d-context';

describe('WaCanvas2d', () => {
    @Component({
        template: `
            <canvas
                #canvas
                height="100"
                waCanvas2d
                width="100"
            >
                <canvas-path
                    fillStyle="red"
                    filter="hue-rotate(180deg)"
                >
                    <canvas-rect
                        [height]="20"
                        [width]="20"
                        [x]="10"
                        [y]="10"
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

    afterAll(() => {
        fixture.destroy();
    });

    it('creates context', () => {
        expect(testComponent.context instanceof CanvasRenderingContext2D).toBe(true);
    });

    it('draws a rectangle at given coordinates of given color with applied filter', (done) => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(5, 5, 1, 1).data]).toEqual([
                0, 0, 0, 0,
            ]);
            expect([...testComponent.context.getImageData(25, 25, 1, 1).data]).toEqual([
                0, 109, 109, 255,
            ]);
            done();
        }, 50);
    });
});
