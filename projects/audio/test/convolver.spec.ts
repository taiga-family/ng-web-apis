import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioConvolver} from '../src/nodes/convolver';

describe('ConvolverNode', () => {
    @Component({
        template: `
            <div waConvolverNode buffer="base/demo.mp3"></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioConvolver)
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
        expect(testComponent.node instanceof ConvolverNode).toBe(true);
    });
});

describe('ConvolverNode factory fallback', () => {
    @Component({
        template: `
            <div waConvolverNode buffer="base/demo.mp3"></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioConvolver)
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
        expect(testComponent.node instanceof ConvolverNode).toBe(true);
    });
});
