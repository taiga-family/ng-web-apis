import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WebAudioContext} from '../src/directives/audio-context';
import {WaWebAudio} from '../src/module';

describe('AudioContext', () => {
    @Component({
        standalone: true,
        template: `
            <div
                sampleRate="22050"
                waAudioContext
            ></div>
        `,
    })
    class Test {
        @ViewChild(WebAudioContext)
        public audioContext!: AudioContext;
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

    it('creates context', () => {
        expect(testComponent.audioContext instanceof AudioContext).toBe(true);
    });
});
