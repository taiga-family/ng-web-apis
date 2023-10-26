import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WebAudioModule} from '../src/module';
import {WebAudioContext} from '../src/directives/audio-context';

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
        audioContext!: AudioContext;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates context', () => {
        expect(testComponent.audioContext instanceof AudioContext).toBe(true);
    });
});
