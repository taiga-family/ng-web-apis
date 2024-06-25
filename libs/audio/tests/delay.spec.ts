import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WaWebAudio} from '../src/module';
import {WebAudioDelay} from '../src/nodes/delay';

describe('Delay', () => {
    describe('DelayNode', () => {
        @Component({
            template: `
                <div waDelayNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioDelay)
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
            expect(testComponent.node instanceof DelayNode).toBe(true);
        });
    });

    describe('DelayNode factory fallback', () => {
        @Component({
            template: `
                <div waDelayNode></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioDelay)
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
            expect(testComponent.node instanceof DelayNode).toBe(true);
        });
    });
});
