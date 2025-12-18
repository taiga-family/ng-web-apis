import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {map, type Observable, timer} from 'rxjs';

@Component({
    selector: 'app-clock',
    imports: [CommonModule],
    template: `
        {{ date$ | async | date: 'mediumTime' }}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Clock {
    protected readonly date$: Observable<number> = timer(0, 1000).pipe(
        map(() => Date.now()),
    );
}
