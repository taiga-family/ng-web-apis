import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {
    AUDIO_CONTEXT,
    AUDIO_NODE,
    WaWebAudio,
    WebAudioScriptProcessor,
} from '@ng-web-apis/audio';

describe('ScriptProcessorNode', () => {
    @Component({
        template: `
            <div waScriptProcessorNode></div>
        `,
    })
    class Test {
        @ViewChild(WebAudioScriptProcessor)
        public node!: AudioNode;
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

    it('creates node', () => {
        expect(testComponent.node instanceof ScriptProcessorNode).toBe(true);
    });

    xit('100% coverage FTW!', () => {
        TestBed.overrideProvider(AUDIO_CONTEXT, {useValue: null})
            .overrideProvider(AUDIO_NODE, {useValue: null})
            .runInInjectionContext(() => {
                expect(() => new WebAudioScriptProcessor(null, null, null)).toThrow();
            });
    });
});
