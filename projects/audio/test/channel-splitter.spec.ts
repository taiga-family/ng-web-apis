import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioChannelSplitter} from '../src/nodes/channel-splitter';

describe('ChannelSplitterNode', () => {
    @Component({
        template: `
            <div waChannelSplitterNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioChannelSplitter)
        node!: AudioNode;
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
        expect(testComponent.node instanceof ChannelSplitterNode).toBe(true);
    });
});

describe('ChannelSplitterNode', () => {
    @Component({
        template: `
            <div waChannelSplitterNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioChannelSplitter)
        node!: AudioNode;
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
        expect(testComponent.node instanceof ChannelSplitterNode).toBe(true);
    });
});
