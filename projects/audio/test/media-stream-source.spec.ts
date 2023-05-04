import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WebAudioModule} from '../src/module';
import {CONSTRUCTOR_SUPPORT} from '../src/tokens/constructor-support';
import {MEDIA_STREAM} from '../src/tokens/media-stream';
import {WebAudioMediaStreamSource} from '../src/sources/media-stream-source';

const context = new AudioContext();
const destination = new MediaStreamAudioDestinationNode(context);
const STREAM = destination.stream;

describe('MediaStreamAudioSourceNode', () => {
    @Component({
        template: `
            <audio waMediaStreamAudioSourceNode></audio>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioMediaStreamSource)
        node!: AudioNode;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: MEDIA_STREAM,
                    useValue: STREAM,
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof MediaStreamAudioSourceNode).toBe(true);
    });
});

describe('MediaStreamAudioSourceNode factory fallback', () => {
    @Component({
        template: `
            <audio waMediaStreamAudioSourceNode></audio>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioMediaStreamSource)
        node!: AudioNode;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: MEDIA_STREAM,
                    useValue: STREAM,
                },
                {
                    provide: CONSTRUCTOR_SUPPORT,
                    useValue: false,
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof MediaStreamAudioSourceNode).toBe(true);
    });
});
