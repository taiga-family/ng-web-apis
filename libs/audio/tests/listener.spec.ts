import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioContext} from '../src/directives/audio-context';

describe('AudioListener', () => {
    @Component({
        template: `
            <div
                waAudioContext
                forwardX="237"
                forwardY="1"
                forwardZ="2"
                positionX="3"
                positionY="4"
                positionZ="5"
                upX="6"
                upY="7"
                upZ="8"
            >
                <div waAudioDestinationNode></div>
            </div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioContext)
        context!: AudioContext;
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

    it('creates node', () => {
        expect(testComponent.context.listener instanceof AudioListener).toBe(true);
    });
});

describe('AudioListener factory fallback', () => {
    @Component({
        template: `
            <div
                waAudioContext
                forwardX="237"
                forwardY="1"
                forwardZ="2"
                positionX="3"
                positionY="4"
                positionZ="5"
                upX="6"
                upY="7"
                upZ="8"
            >
                <div waAudioDestinationNode></div>
            </div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioContext)
        context!: AudioContext;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
            providers,
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.context.listener instanceof AudioListener).toBe(true);
    });
});
