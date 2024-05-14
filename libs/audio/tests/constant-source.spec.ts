import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';

import {WebAudioModule} from '../src/module';
import {WebAudioConstantSource} from '../src/sources/constant-source';

describe('ConstantSourceNode', () => {
    @Component({
        template: `
            <div waConstantSourceNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioConstantSource)
        public node!: AudioNode;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof ConstantSourceNode).toBe(true);
    });
});
