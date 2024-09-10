import {between, toFrequency, toNote} from '@ng-web-apis/midi';

window.onbeforeunload = jasmine.createSpy();

describe('utility functions', () => {
    describe('between', () => {
        it('number is between', () => {
            expect(between(5, 1, 10)).toBe(true);
        });

        it('number is not between', () => {
            expect(between(15, 1, 10)).toBe(false);
        });

        it('bottom edge', () => {
            expect(between(1, 1, 10)).toBe(true);
        });

        it('top edge', () => {
            expect(between(10, 1, 10)).toBe(true);
        });
    });

    describe('toFrequency', () => {
        it('default tuning', () => {
            expect(toFrequency(69)).toBe(440);
        });

        it('altered tuning', () => {
            expect(Math.round(toFrequency(71, 392))).toBe(440);
        });
    });

    describe('toNote', () => {
        it('default tuning', () => {
            expect(toNote(196)).toBe(55);
        });

        it('altered tuning', () => {
            expect(toNote(466.16, 392)).toBe(72);
        });
    });
});
