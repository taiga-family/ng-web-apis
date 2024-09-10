import {NgZone} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import type {CanvasMethod} from '@ng-web-apis/canvas';
import {CANVAS_2D_CONTEXT, CANVAS_PROPERTIES, WaDrawService} from '@ng-web-apis/canvas';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {of} from 'rxjs';

window.onbeforeunload = jasmine.createSpy();

describe('WaDrawService', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const prop: CanvasMethod = {
        // eslint-disable-next-line jest/no-jasmine-globals
        call: jasmine.createSpy('call'),
    };
    const zone = {
        runOutsideAngular: (fn: any) => fn(),
    } as unknown as NgZone;

    xit('calls hooks with context', () => {
        TestBed.overrideProvider(CANVAS_PROPERTIES, {useValue: []})
            .overrideProvider(CANVAS_PROPERTIES, {useValue: [prop]})
            .overrideProvider(CANVAS_2D_CONTEXT, {useValue: context})
            .overrideProvider(WA_ANIMATION_FRAME, {useValue: of(0)})
            .overrideProvider(NgZone, {useValue: zone})
            .runInInjectionContext(() => {
                const service = new WaDrawService();

                expect(service).toBeTruthy();

                expect(prop.call).toHaveBeenCalledWith(context);
            });
    });
});
