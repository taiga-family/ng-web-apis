import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TextToSpeechDirective, UtterancePipe} from '@ng-web-apis/speech';

import type {SpeechSynthesisUtteranceOptions} from '../src/interfaces/speech-synthesis-utterance-options';

describe('SpeechSynthesis', () => {
    @Component({
        template: `
            <ng-container
                [waTextToSpeech]="text | waUtterance: options"
                [waTextToSpeechPaused]="paused"
                (waTextToSpeechError)="onError($event.error)"
            ></ng-container>
            <ng-container
                [waTextToSpeech]="utterance"
                [waTextToSpeechPaused]="paused"
                (waTextToSpeechBoundary)="onBoundary()"
                (waTextToSpeechEnd)="onEnd()"
                (waTextToSpeechMark)="onMark()"
            ></ng-container>
        `,
    })
    class Test {
        public options?: SpeechSynthesisUtteranceOptions;
        public text = 'Test 1';
        public paused = true;
        public readonly utterance = new SpeechSynthesisUtterance('Test 2');
        // eslint-disable-next-line jest/no-jasmine-globals
        public readonly onError = jasmine.createSpy('onError');
        // eslint-disable-next-line jest/no-jasmine-globals
        public readonly onMark = jasmine.createSpy('onMark');
        // eslint-disable-next-line jest/no-jasmine-globals
        public readonly onBoundary = jasmine.createSpy('onBoundary');
        // eslint-disable-next-line jest/no-jasmine-globals
        public readonly onEnd = jasmine.createSpy('onEnd');
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TextToSpeechDirective, UtterancePipe],
            declarations: [Test],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Throws error when not allowed', () => {
        expect(testComponent.onError).toHaveBeenCalledWith('not-allowed');

        // Just to cover both missing and empty argument branches
        testComponent.options = {};
        fixture.detectChanges();
    });

    it('Accepts options', () => {
        testComponent.paused = false;
        testComponent.options = {
            voice: null,
            rate: 1,
            pitch: 1,
            volume: 1,
            lang: 'en-EN',
        };
        fixture.detectChanges();

        expect(testComponent.onError).toHaveBeenCalledWith('not-allowed');
    });

    it('Emits events', () => {
        testComponent.utterance.onmark!('a' as any);
        testComponent.utterance.onboundary!('b' as any);
        testComponent.utterance.onend!('c' as any);

        expect(testComponent.onMark).toHaveBeenCalled();
        expect(testComponent.onBoundary).toHaveBeenCalled();
        expect(testComponent.onEnd).toHaveBeenCalled();
    });
});
