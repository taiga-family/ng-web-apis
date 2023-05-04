import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioPanner} from '../src/nodes/panner';

describe('PannerNode', () => {
    @Component({
        template: `
            <div waPannerNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioPanner)
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
        expect(testComponent.node instanceof PannerNode).toBe(true);
    });
});

describe('PannerNode factory fallback', () => {
    @Component({
        template: `
            <div waPannerNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioPanner)
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
        expect(testComponent.node instanceof PannerNode).toBe(true);
    });
});
