import {alwaysFalse, emptyFunction} from './functions';

export const EVENT_TARGET: EventTarget = {
    addEventListener: emptyFunction,
    dispatchEvent: alwaysFalse,
    removeEventListener: emptyFunction,
};
