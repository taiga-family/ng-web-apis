import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WaWebAudio} from '../src/module';
import {WebAudioConstantSource} from '../src/sources/constant-source';

describe('ConstantSourceNode', () => {
    @Component({
        standalone: true,
        template: `
            <div waConstantSourceNode></div>
        `,
    })
    class Test {
        @ViewChild(WebAudioConstantSource)
        public node!: AudioNode;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WaWebAudio],
            declarations: [Test],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof ConstantSourceNode).toBe(true);
    });
});
