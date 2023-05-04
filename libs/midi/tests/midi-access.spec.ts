import {TestBed} from '@angular/core/testing';
import {NAVIGATOR} from '@ng-web-apis/common';
import {MIDI_ACCESS} from '../src/tokens/midi-access';
import {SYSEX} from '../src/tokens/sysex';

describe('MIDI_ACCESS', () => {
    const navigatorMock = jasmine.createSpyObj(['requestMIDIAccess']);

    it('SYSEX is false by default', () => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: NAVIGATOR,
                    useValue: navigatorMock,
                },
            ],
        });

        TestBed.get(MIDI_ACCESS);

        expect(navigatorMock.requestMIDIAccess.calls.mostRecent().args[0]).toEqual({
            sysex: false,
        });
    });

    it('SYSEX is set to true', () => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: NAVIGATOR,
                    useValue: navigatorMock,
                },
                {
                    provide: SYSEX,
                    useValue: true,
                },
            ],
        });

        TestBed.get(MIDI_ACCESS);

        expect(navigatorMock.requestMIDIAccess.calls.mostRecent().args[0]).toEqual({
            sysex: true,
        });
    });

    it('Promise is rejected when Web MIDI API is not supported', done => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: NAVIGATOR,
                    useValue: {},
                },
            ],
        });

        TestBed.get(MIDI_ACCESS).catch((e: any) => {
            expect(e instanceof Error).toBe(true);
            done();
        });
    });
});
