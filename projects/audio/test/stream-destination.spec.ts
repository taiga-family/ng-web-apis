import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../src/constants/fallback';
import {WebAudioModule} from '../src/module';
import {WebAudioMediaStreamDestination} from '../src/directives/stream-destination';

describe('MediaStreamAudioDestinationNode', () => {
    @Component({
        template: `
            <div waMediaStreamAudioDestinationNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioMediaStreamDestination)
        node!: MediaStreamAudioDestinationNode;
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
        expect(testComponent.node instanceof MediaStreamAudioDestinationNode).toBe(true);
    });
});

describe('MediaStreamAudioDestinationNode factory fallback', () => {
    @Component({
        template: `
            <div waMediaStreamAudioDestinationNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioMediaStreamDestination)
        node!: MediaStreamAudioDestinationNode;
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
        expect(testComponent.node instanceof MediaStreamAudioDestinationNode).toBe(true);
    });
});
