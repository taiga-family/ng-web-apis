import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {finalize} from 'rxjs';
import {ViewTransitionService} from '@ng-web-apis/view-transition';

interface Photo {
    src: string;
    author: string;
    url: string;
}

const PHOTOS = [
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
    selector: `view-transition-page`,
    templateUrl: `./view-transition-page.component.html`,
    styleUrls: [`./view-transition-page.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransitionPageComponent {
    codeSample = USAGE_SAMPLE;
    activeIndex = -1;
    showDetails = false;
    detailInfo: Photo | undefined = undefined;
    data = PHOTOS;

    constructor(
        private readonly viewTransitionService: ViewTransitionService,
        private readonly cdr: ChangeDetectorRef,
    ) {}

    open(index: number): void {
        this.activeIndex = index;
        this.detailInfo = this.data[index];
        this.cdr.detectChanges();

        this.viewTransitionService
            .startViewTransition(() => {
                this.showDetails = true;
                this.cdr.detectChanges();
            })
            .subscribe();
    }

    close(): void {
        this.viewTransitionService
            .startViewTransition(() => {
                this.showDetails = false;
                this.cdr.detectChanges();
            })
            .pipe(
                finalize(() => {
                    this.activeIndex = -1;
                    this.detailInfo = undefined;
                }),
            )
            .subscribe();
    }
}
