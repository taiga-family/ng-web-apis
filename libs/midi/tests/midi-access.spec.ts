import {TestBed} from '@angular/core/testing';
import {WA_NAVIGATOR} from '@ng-web-apis/common';
import {MIDI_ACCESS, SYSEX} from '@ng-web-apis/midi';

window.onbeforeunload = jasmine.createSpy();

describe('MIDI_ACCESS', () => {
    const navigatorMock = jasmine.createSpyObj(['requestMIDIAccess']);

    it('sYSEX is false by default', () => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_NAVIGATOR,
                    useValue: navigatorMock,
                },
            ],
        });

        void TestBed.inject(MIDI_ACCESS);

        expect(navigatorMock.requestMIDIAccess.calls.mostRecent().args[0]).toEqual({
            sysex: false,
        });
    });

    it('sYSEX is set to true', () => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_NAVIGATOR,
                    useValue: navigatorMock,
                },
                {
                    provide: SYSEX,
                    useValue: true,
                },
            ],
        });

        void TestBed.inject(MIDI_ACCESS);

        expect(navigatorMock.requestMIDIAccess.calls.mostRecent().args[0]).toEqual({
            sysex: true,
        });
    });

    it('promise is rejected when Web MIDI API is not supported', (done) => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_NAVIGATOR,
                    useValue: {},
                },
            ],
        });

        void TestBed.inject(MIDI_ACCESS).catch((e: unknown) => {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(e instanceof Error).toBe(true);

            done();
        });
    });
});
