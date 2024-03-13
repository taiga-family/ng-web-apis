import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WebAudioContext} from '../src/directives/audio-context';
import {WebAudioModule} from '../src/module';

describe('AudioContext', () => {
    @Component({
        template: `
            <div
                sampleRate="22050"
                waAudioContext
            ></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioContext)
        public audioContext!: AudioContext;
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

    it('creates context', () => {
        expect(testComponent.audioContext instanceof AudioContext).toBe(true);
    });
});
