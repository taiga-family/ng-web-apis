import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaWebAudio, WebAudioContext} from '@ng-web-apis/audio';

window.onbeforeunload = jasmine.createSpy();

describe('AudioContext', () => {
    @Component({
        standalone: true,
        imports: [WaWebAudio],
        template: `
            <div
                sampleRate="22050"
                waAudioContext
            ></div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly audioContext = viewChild.required(WebAudioContext);
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
        expect(testComponent.audioContext() instanceof AudioContext).toBe(true);
    });
});
