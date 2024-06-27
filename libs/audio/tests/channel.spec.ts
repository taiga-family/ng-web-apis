import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {providers} from '../src/constants/fallback';
import {WebAudioChannel} from '../src/directives/channel';
import {WaWebAudio} from '../src/module';

describe('Channel', () => {
    describe('Channel', () => {
        @Component({
            template: `
                <div waChannel></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioChannel)
            public node!: AudioNode;
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [WaWebAudio],
                declarations: [Test],
            });
        });

        it('creates node', () => {
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });

    describe('Channel factory fallback', () => {
        @Component({
            template: `
                <div waChannel></div>
            `,
        })
        class Test {
            @ViewChild(WebAudioChannel)
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
        });

        it('creates node', () => {
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();

            expect(testComponent.node instanceof AudioNode).toBe(true);
        });
    });
});
