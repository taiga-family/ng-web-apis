import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {map, Observable, timer} from 'rxjs';

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
    protected readonly date$: Observable<number> = timer(0, 1000).pipe(
        map(() => Date.now()),
    );
}
