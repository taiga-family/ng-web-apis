import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioBiquadFilter} from '../src/nodes/biquad-filter';

describe('BiquadFilter', () => {
    describe('BiquadFilterNode', () => {
        @Component({
            standalone: true,
            template: `
                <div waBiquadFilterNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioBiquadFilter)
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
            expect(testComponent.node instanceof BiquadFilterNode).toBe(true);
        });
    });

    describe('BiquadFilterNode factory fallback', () => {
        @Component({
            standalone: true,
            template: `
                <div waBiquadFilterNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioBiquadFilter)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
                providers,
            });

            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('creates node', () => {
            expect(testComponent.node instanceof BiquadFilterNode).toBe(true);
        });
    });
});
