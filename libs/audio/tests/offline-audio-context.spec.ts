import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WebAudioOfflineContext} from '../src/directives/offline-audio-context';
import {WaWebAudio} from '../src/module';

describe('OfflineAudioContext', () => {
    @Component({
        standalone: true,
        template: `
            <div
                length="44100"
                sampleRate="22050"
                waOfflineAudioContext
            ></div>
        `,
    })
    class Test {
        @ViewChild(WebAudioOfflineContext)
        public audioContext!: OfflineAudioContext;
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
        expect(testComponent.audioContext instanceof OfflineAudioContext).toBe(true);
    });

    it('parses sampleRate', () => {
        expect(testComponent.audioContext.sampleRate).toBe(22050);
    });

    it('parses length', () => {
        expect(testComponent.audioContext.length).toBe(44100);
    });
});
