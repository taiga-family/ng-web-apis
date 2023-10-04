import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-clock',
    template: `
        {{ date$ | async | date : 'mediumTime' }}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent {
    readonly date$: Observable<number> = timer(0, 1000).pipe(map(() => Date.now()));
}
