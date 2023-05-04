import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioBiquadFilter} from '../src/nodes/biquad-filter';

describe('BiquadFilterNode', () => {
    @Component({
        template: `
            <div waBiquadFilterNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioBiquadFilter)
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
        expect(testComponent.node instanceof BiquadFilterNode).toBe(true);
    });
});

describe('BiquadFilterNode factory fallback', () => {
    @Component({
        template: `
            <div waBiquadFilterNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioBiquadFilter)
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
        expect(testComponent.node instanceof BiquadFilterNode).toBe(true);
    });
});
