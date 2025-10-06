import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {CANVAS_2D_CONTEXT, WaCanvas} from '@ng-web-apis/canvas';

window.onbeforeunload = jasmine.createSpy();

describe('Properties', () => {
    @Component({
        standalone: true,
        imports: [WaCanvas],
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
                    />
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
                    />
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
                    />
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
                    />
                </canvas-path>
            </canvas>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly context = viewChild.required('canvas', {
            read: CANVAS_2D_CONTEXT,
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

    it('clipping works', (done) => {
        setTimeout(() => {
            expect([...testComponent.context().getImageData(0, 0, 1, 1).data]).toEqual([
                0, 128, 0, 255,
            ]);

            done();
        }, 50);
    });

    it('overlays layers with given mode', (done) => {
        setTimeout(() => {
            expect([...testComponent.context().getImageData(10, 10, 1, 1).data]).toEqual([
                255, 128, 0, 255,
            ]);

            done();
        }, 50);
    });
});
