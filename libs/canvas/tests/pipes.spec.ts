import {ChangeDetectionStrategy, Component, Input, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WA_CANVAS_2D_CONTEXT, WaCanvas} from '@ng-web-apis/canvas';

window.onbeforeunload = jasmine.createSpy();

describe('Pipes', () => {
    @Component({
        selector: 'canvas',
        imports: [WaCanvas],
        template: `
            <canvas-path
                [closed]="true"
                [fillStyle]="grad | gradient: 0 : 0 : 1 : 1"
                [strokeStyle]="img | pattern"
            >
                <canvas-arc [endAngle]="360 | rad" />
                <canvas-rect
                    [height]="100"
                    [width]="100"
                    [x]="0"
                    [y]="0"
                />
            </canvas-path>
            <canvas-path [path]="'L 1 1' | path" />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Canvas {
        protected grad = new Map([
            [0, 'red'],
            [1, 'blue'],
        ]);

        @Input()
        public img!: HTMLImageElement;
    }

    @Component({
        imports: [Canvas, WaCanvas],
        template: `
            <img
                #img
                alt="test"
                height="14"
                src="data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0j
vb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAA
Re8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0Cc
guWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7"
                width="16"
            />
            <canvas
                #canvas
                height="100"
                waCanvas2d
                width="100"
                [img]="img"
            ></canvas>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly context = viewChild.required('canvas', {
            read: WA_CANVAS_2D_CONTEXT,
        });
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [Test, Canvas]});

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('gradient works', (done) => {
        setTimeout(() => {
            expect([...testComponent.context().getImageData(0, 0, 1, 1).data]).toEqual([
                127, 0, 127, 255,
            ]);

            done();
        }, 50);
    });
});
