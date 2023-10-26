import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioOutput} from '../src/directives/output';

describe('Output', () => {
    @Component({
        template: `
            <div [waOutput]="destination"></div>
            <div
                #destination="AudioNode"
                waAudioDestinationNode
            ></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioOutput)
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
        expect(testComponent.node instanceof AudioNode).toBe(true);
    });
});

describe('Output factory fallback', () => {
    @Component({
        template: `
            <div [waOutput]="destination"></div>
            <div
                #destination="AudioNode"
                waAudioDestinationNode
            ></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioOutput)
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
        expect(testComponent.node instanceof AudioNode).toBe(true);
    });
});
