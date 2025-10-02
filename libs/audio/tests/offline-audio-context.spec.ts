import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaWebAudio, WebAudioOfflineContext} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('OfflineAudioContext', () => {
    @Component({
        standalone: true,
        imports: [WaWebAudio],
        template: `
            <div
                length="44100"
                sampleRate="22050"
                waOfflineAudioContext
            ></div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(WebAudioOfflineContext)
        public audioContext!: OfflineAudioContext;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Test],
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
