import type {InjectionToken} from '@angular/core';

export type InjectionTokenType<Token> = Token extends InjectionToken<infer T> ? T : never;
