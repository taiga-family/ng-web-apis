import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WaCanvasClipPath} from '../src/methods/clip-path';
import {CanvasModule} from '../src/module';
import {CANVAS_2D_CONTEXT} from '../src/tokens/canvas-2d-context';

describe('Methods', () => {
    @Component({
        template: `
            <canvas
                #canvas
                height="100"
                waCanvas2d
                width="100"
            >
                <canvas-clip-path>
                    <canvas-rect></canvas-rect>
                    <canvas-rect></canvas-rect>
                </canvas-clip-path>
                <!--Empty image doesn't throw (in case it is still loading)-->
                <canvas-draw-image [image]="loading"></canvas-draw-image>
                <canvas-draw-image [image]="image"></canvas-draw-image>
                <canvas-draw-image
                    [dHeight]="10"
                    [dWidth]="10"
                    [dX]="10"
                    [dY]="10"
                    [image]="image"
                ></canvas-draw-image>
                <canvas-draw-image
                    [dHeight]="1"
                    [dWidth]="1"
                    [dX]="30"
                    [dY]="30"
                    [image]="offset"
                    [sHeight]="1"
                    [sWidth]="1"
                    [sX]="1"
                    [sY]="1"
                ></canvas-draw-image>
                <canvas-text
                    text="No crash"
                    textBaseline="top"
                    [x]="50"
                ></canvas-text>
            </canvas>
        `,
    })
    class Test {
        @ViewChild('canvas', {read: CANVAS_2D_CONTEXT})
        public readonly context!: CanvasRenderingContext2D;

        @ViewChild(WaCanvasClipPath)
        public readonly clipPath!: WaCanvasClipPath;

        public readonly image = new Image();

        public readonly offset = new Image();

        public readonly loading?: ImageBitmap;

        constructor() {
            this.image.src =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';

            this.offset.src =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAWSURBVBhXY/zPwABEDAxMIILxPwMDACIYAwJtzRz5AAAAAElFTkSuQmCC';
        }
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

    it('draws an image', (done) => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(1, 1, 1, 1).data]).toEqual([
                0, 0, 0, 0,
            ]);
            expect([...testComponent.context.getImageData(0, 0, 1, 1).data]).toEqual([
                255, 0, 0, 255,
            ]);
            done();
        }, 50);
    });

    it('draws an image with offset and scale', (done) => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(10, 10, 1, 1).data]).toEqual([
                255, 0, 0, 255,
            ]);
            expect([...testComponent.context.getImageData(19, 19, 1, 1).data]).toEqual([
                255, 0, 0, 255,
            ]);
            expect([...testComponent.context.getImageData(20, 20, 1, 1).data]).toEqual([
                0, 0, 0, 0,
            ]);
            done();
        }, 50);
    });

    it('draws an image with offset in the source', (done) => {
        setTimeout(() => {
            expect([...testComponent.context.getImageData(30, 30, 1, 1).data]).toEqual([
                0, 255, 0, 255,
            ]);
            done();
        }, 50);
    });

    it('clip collects path segments', () => {
        expect(testComponent.clipPath.pathSteps.length).toBe(2);
    });
});
