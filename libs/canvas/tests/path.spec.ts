import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WA_CANVAS_2D_CONTEXT, WaCanvas} from '@ng-web-apis/canvas';

window.onbeforeunload = jasmine.createSpy();

describe('Path', () => {
    @Component({
        imports: [WaCanvas],
        template: `
            <canvas
                #canvas
                height="100"
                waCanvas2d
                width="100"
            >
                <canvas-path fillStyle="red">
                    <canvas-arc />
                    <canvas-arc-to />
                    <canvas-bezier-curve-to />
                    <canvas-ellipse />
                    <canvas-line-to />
                    <canvas-move-to />
                    <canvas-quadratic-curve-to />
                    <canvas-rect
                        [height]="20"
                        [width]="20"
                        [x]="0"
                        [y]="0"
                    />
                </canvas-path>
            </canvas>
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
        TestBed.configureTestingModule({
            imports: [Test],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('draws path', (done) => {
        setTimeout(() => {
            expect([...testComponent.context().getImageData(0, 0, 1, 1).data]).toEqual([
                255, 0, 0, 255,
            ]);

            done();
        }, 50);
    });
});
