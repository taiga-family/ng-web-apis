import {isPlatformServer} from '@angular/common';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {
    EMPTY,
    from,
    fromEvent,
    map,
    Observable,
    shareReplay,
    startWith,
    Subscription,
    switchMap,
} from 'rxjs';

import {WA_PERMISSIONS} from '../tokens/permissions';
import {WA_PERMISSIONS_SUPPORT} from '../tokens/permissions-support';

export type PermissionsQueryArgs = Parameters<typeof Permissions.prototype.query>[0];

@Injectable({
    providedIn: 'root',
})
export class PermissionsService {
    private readonly isServer = isPlatformServer(inject(PLATFORM_ID));
    private readonly permissions = inject(WA_PERMISSIONS);
    private readonly permissionsSupported = inject(WA_PERMISSIONS_SUPPORT);

    public state(
        nameOrDescriptor: PermissionName | PermissionsQueryArgs,
    ): Observable<PermissionState> {
        const descriptor: PermissionDescriptor =
            typeof nameOrDescriptor === 'string'
                ? {name: nameOrDescriptor}
                : nameOrDescriptor;

        return this.isServer
            ? EMPTY
            : new Observable<PermissionState>((subscriber) => {
                  if (!this.permissionsSupported) {
                      subscriber.error('Permissions is not supported in your browser');

                      return new Subscription();
                  }

                  return from(this.permissions.query(descriptor))
                      .pipe(
                          switchMap((status) =>
                              fromEvent(status, 'change').pipe(
                                  startWith(null),
                                  map(() => status.state),
                              ),
                          ),
                      )
                      .subscribe(subscriber);
              }).pipe(shareReplay({bufferSize: 1, refCount: true}));
    }
}
