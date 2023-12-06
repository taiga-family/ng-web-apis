import {NgZone} from '@angular/core';
import {of} from 'rxjs';

import {CanvasMethod} from '../src/interfaces/canvas-method';
import {DrawService} from '../src/services/draw.service';

describe(`DrawService`, () => {
    const canvas = document.createElement(`canvas`);
    const context = canvas.getContext(`2d`)!;
    const prop: CanvasMethod = {
        // eslint-disable-next-line jest/no-jasmine-globals
        call: jasmine.createSpy(`call`),
    };
    const zone = {
        runOutsideAngular: (fn: any) => fn(),
    } as unknown as NgZone;

    it(`calls hooks with context`, () => {
        const service = new DrawService([], [prop], context, of(0), zone);

        expect(service).toBeTruthy();

        expect(prop.call).toHaveBeenCalledWith(context);
    });
});
