import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    standalone: true,
    selector: 'app-clock',
    imports: [CommonModule],
    template: `
        {{ date$ | async | date: 'mediumTime' }}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent {
    readonly date$: Observable<number> = timer(0, 1000).pipe(map(() => Date.now()));
}
