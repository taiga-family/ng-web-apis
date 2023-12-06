import {
    alwaysFalse,
    alwaysNull,
    alwaysRejected,
    alwaysZero,
    emptyArray,
    emptyFunction,
    emptyObject,
    identity,
} from '../src/utils/functions';

describe(`Functions`, () => {
    it(`identity returns the same item`, () => {
        const item = {};

        expect(identity(item)).toBe(item);
    });

    it(`emptyFunction returns nothing`, () => {
        expect(emptyFunction()).toBeUndefined();
    });

    it(`emptyArray returns empty array`, () => {
        expect(emptyArray()).toEqual([]);
    });

    it(`emptyObject returns empty object`, () => {
        expect(emptyObject()).toEqual({});
    });

    it(`alwaysFalse returns false`, () => {
        expect(alwaysFalse()).toBe(false);
    });

    it(`alwaysNull returns null`, () => {
        expect(alwaysNull()).toBeNull();
    });

    it(`alwaysZero returns 0`, () => {
        expect(alwaysZero()).toBe(0);
    });

    it(`alwaysRejected returns a rejected Promise`, () => {
        expect(alwaysRejected() instanceof Promise).toBe(true);
    });
});
