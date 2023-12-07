import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Self,
} from '@angular/core';
import {ViewTransitionService} from '@ng-web-apis/view-transition';
import {TuiDestroyService, TuiLetModule} from '@taiga-ui/cdk';
import {TuiLinkModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';
import {BehaviorSubject, takeUntil} from 'rxjs';

interface Photo {
    src: string;
    author: string;
    url: string;
}

const PHOTOS: readonly Photo[] = [
    {
        src: 'https://images.pexels.com/photos/16316785/pexels-photo-16316785/free-photo-of-fluffy-cat-on-blooming-tree-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        author: 'Peng Louis',
        url: 'https://www.pexels.com/photo/fluffy-cat-on-blooming-tree-background-16316785/',
    },
    {
        src: 'https://images.pexels.com/photos/6001385/pexels-photo-6001385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        author: 'Sam Lion',
        url: 'https://www.pexels.com/photo/cute-curious-cat-watching-video-on-laptop-sitting-on-couch-6001385/',
    },
    {
        src: 'https://images.pexels.com/photos/7210265/pexels-photo-7210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        author: 'Blue Bird',
        url: 'https://www.pexels.com/photo/ginger-cat-sleeping-on-ground-in-autumn-7210265/',
    },
];

const USAGE_SAMPLE = `
    // 1) Import service throught DI
    // In Constructor
    constructor(private viewTransitionService: ViewTransitionService) {}
    // or with inject (Angular 14+)
    private service = inject(ViewTransitionService);

    // 2) Call startViewTransition method and pass callback that would change the DOM
    private showMyComponent(): void {
        this.viewTransitionService.startViewTransition(() => {
            this.showMyComponent = true;
            // You might want to call detectChanges to update the DOM inside startViewTransition callback
            this.cdr.detectChanges();
        }).subscribe();
    }
`;

@Component({
    standalone: true,
    selector: 'view-transition-page',
    imports: [CommonModule, HighlightModule, TuiLinkModule, TuiLetModule],
    templateUrl: './view-transition-page.component.html',
    styleUrls: ['./view-transition-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export default class ViewTransitionPageComponent {
    readonly codeSample = USAGE_SAMPLE;
    readonly data = PHOTOS;
    readonly activeIndex$ = new BehaviorSubject(-1);
    readonly detailInfo$ = new BehaviorSubject<Photo | undefined>(undefined);

    constructor(
        @Inject(ViewTransitionService)
        private readonly viewTransitionService: ViewTransitionService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    ) {}

    open(index: number): void {
        this.activeIndex$.next(index);
        this.viewTransitionService
            .startViewTransition(() => {
                this.detailInfo$.next(this.data[index]);
                this.cdr.detectChanges();
            })
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }

    close(): void {
        this.viewTransitionService
            .startViewTransition(() => {
                this.detailInfo$.next(undefined);
                this.cdr.detectChanges();
                this.activeIndex$.next(-1);
            })
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
}
