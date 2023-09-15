import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ViewTransitionService {
    private readonly isSupported = 'startViewTransition' in this.document;

    constructor(@Inject(DOCUMENT) private readonly document: Document) {}

    startViewTransition(
        callback: () => Promise<void> | void,
    ): Observable<ViewTransition> {
        if (!this.isSupported) {
            return throwError(
                () => new Error('startViewTransition is not supported in your browser'),
            );
        }

        return new Observable(subscriber => {
            const transition: ViewTransition =
                this.document.startViewTransition(callback);

            transition.updateCallbackDone.then(
                () => {
                    subscriber.next(transition);
                },
                (error: Error) => {
                    subscriber.error(error);
                },
            );

            transition.ready.catch((error: Error) => {
                subscriber.error(error);
            });

            transition.finished.then(
                () => {
                    subscriber.complete();
                },
                (error: Error) => {
                    subscriber.error(error);
                },
            );

            return () => {
                transition.skipTransition();
            };
        });
    }
}
