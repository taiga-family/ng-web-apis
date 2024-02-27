import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    AUDIO_CONTEXT,
    AUDIO_NODE,
    WebAudioModule,
    WebAudioScriptProcessor,
} from '@ng-web-apis/audio';

describe('ScriptProcessorNode', () => {
    @Component({
        template: `
            <div waScriptProcessorNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioScriptProcessor)
        public node!: AudioNode;
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
