import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {WebAudioOfflineContext} from '../src/directives/offline-audio-context';
import {WebAudioModule} from '../src/module';

describe('OfflineAudioContext', () => {
    @Component({
        template: `
            <div
                length="44100"
                sampleRate="22050"
                waOfflineAudioContext
            ></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioOfflineContext)
        public audioContext!: OfflineAudioContext;
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
        expect(testComponent.audioContext instanceof OfflineAudioContext).toBe(true);
    });

    it('parses sampleRate', () => {
        expect(testComponent.audioContext.sampleRate).toBe(22050);
    });

    it('parses length', () => {
        expect(testComponent.audioContext.length).toBe(44100);
    });
});
