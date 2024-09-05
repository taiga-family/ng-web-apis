import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioOutput} from '../src/directives/output';
import {WaWebAudio} from '../src/module';

describe('Output spec', () => {
    describe('Output', () => {
        @Component({
            standalone: true,
            template: `
                <div [waOutput]="destination"></div>
                <div
                    #destination="AudioNode"
                    waAudioDestinationNode
                ></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioOutput)
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
            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });

    describe('Output factory fallback', () => {
        @Component({
            standalone: true,
            template: `
                <div [waOutput]="destination"></div>
                <div
                    #destination="AudioNode"
                    waAudioDestinationNode
                ></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioOutput)
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
            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });
});
