import {TestBed} from '@angular/core/testing';
import {
    inputById,
    inputByName,
    outputById,
    outputByName,
    WA_MIDI_ACCESS,
    WA_MIDI_INPUT,
    WA_MIDI_OUTPUT,
} from '@ng-web-apis/midi';

window.onbeforeunload = jasmine.createSpy();

describe('inputById', () => {
    const midiInput1 = {
        id: 'input-0',
        name: 'Yamaha',
    };
    const midiInput2 = {
        id: 'input-1',
        name: 'Roland',
    };
    const midiOutput1 = {
        id: 'output-0',
        name: 'Yamaha',
    };
    const midiOutput2 = {
        id: 'output-1',
        name: 'Roland',
    };

    const midiAccessMock = {
        inputs: new Map([
            [midiInput1.id, midiInput1],
            [midiInput2.id, midiInput2],
        ]),
        outputs: new Map([
            [midiOutput1.id, midiOutput1],
            [midiOutput2.id, midiOutput2],
        ]),
    };

    it('gets MIDIInput by id', (done) => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_MIDI_ACCESS,
                    useValue: Promise.resolve(midiAccessMock),
                },
                inputById('input-0'),
            ],
        });

        void TestBed.inject(WA_MIDI_INPUT).then((input: any) => {
            expect(input).toBe(midiInput1);

            done();
        });
    });

    it('gets MIDIInput by name', (done) => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_MIDI_ACCESS,
                    useValue: Promise.resolve(midiAccessMock),
                },
                inputByName('Roland'),
            ],
        });

        void TestBed.inject(WA_MIDI_INPUT).then((input: any) => {
            expect(input).toBe(midiInput2);

            done();
        });
    });

    it('gets MIDIOutput by id', (done) => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_MIDI_ACCESS,
                    useValue: Promise.resolve(midiAccessMock),
                },
                outputById('output-0'),
            ],
        });

        void TestBed.inject(WA_MIDI_OUTPUT).then((input: any) => {
            expect(input).toBe(midiOutput1);

            done();
        });
    });

    it('gets MIDIOutput by name', (done) => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_MIDI_ACCESS,
                    useValue: Promise.resolve(midiAccessMock),
                },
                outputByName('Roland'),
            ],
        });

        void TestBed.inject(WA_MIDI_OUTPUT).then((input: any) => {
            expect(input).toBe(midiOutput2);

            done();
        });
    });
});
