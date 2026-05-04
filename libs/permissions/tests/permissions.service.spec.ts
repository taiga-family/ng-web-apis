import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {
    WA_PERMISSIONS,
    WA_PERMISSIONS_SUPPORT,
    WaPermissionsService,
} from '@ng-web-apis/permissions';

import {FakePermissionStatus} from '../src/mocks/fake-permission-status';
import {FakePermissions} from '../src/mocks/fake-permissions';

window.onbeforeunload = jasmine.createSpy();

describe('WaPermissionsService', () => {
    describe('WaPermissionsService', () => {
        let service: WaPermissionsService;
        let permissions: Permissions;
        let permissionStatus: FakePermissionStatus;
        const QUERY_DELAY = 300;

        /**
         * Creates a spy on permissions.query() call
         * We cannot put this code in the `beforeEach` block since it has a setTimeout
         * call, which would not work with the fakeAsync functionality. It needs to be run
         * in the context of the `it` callback.
         */
        function createQuerySpy(shouldReject = false): jasmine.Spy {
            const queryPromise = new Promise<PermissionStatus>((resolve, reject) => {
                // assign the object that will be resolved outside of the setTimeout block
                // so that we can set up spies on it early
                permissionStatus = new FakePermissionStatus('prompt');

                setTimeout(() => {
                    if (shouldReject) {
                        reject(new Error('some error'));
                    } else {
                        resolve(permissionStatus);
                    }
                }, QUERY_DELAY);
            });

            return spyOn(permissions, 'query').and.returnValue(queryPromise);
        }

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [{provide: WA_PERMISSIONS, useClass: FakePermissions}],
            });

            service = TestBed.inject(WaPermissionsService);
            permissions = TestBed.inject(WA_PERMISSIONS);
        });

        it('service init', () => {
            expect(service).toBeTruthy();
        });

        it('state() provides status', fakeAsync(() => {
            createQuerySpy();

            const actual: PermissionState[] = [];

            service.state('geolocation').subscribe((state) => {
                actual.push(state);
            });

            expect(actual).toEqual([]);

            tick(QUERY_DELAY);

            expect(actual).toEqual(['prompt']);
        }));

        it('state() provides status when it changes', fakeAsync(() => {
            createQuerySpy();

            const actual: PermissionState[] = [];

            service.state('geolocation').subscribe((state) => {
                actual.push(state);
            });

            tick(QUERY_DELAY);

            permissionStatus.simulateStateChange('granted');

            expect(actual).toEqual(['prompt', 'granted']);
        }));

        it('state takes a PermissionDescriptor', fakeAsync(() => {
            createQuerySpy();

            const actual: PermissionState[] = [];

            service.state({name: 'geolocation'}).subscribe((state) => {
                actual.push(state);
            });

            expect(actual).toEqual([]);

            tick(QUERY_DELAY);

            expect(actual).toEqual(['prompt']);
        }));

        it('provides status from cache if other subscriptions exist', () => {
            const querySpy = createQuerySpy();
            const obs = service.state('geolocation');

            obs.subscribe();

            expect(querySpy).toHaveBeenCalledTimes(1);

            obs.subscribe();

            expect(querySpy).toHaveBeenCalledTimes(1);
        });

        it('should not addEventListener if unsubscribed before query promise got resolved', fakeAsync(() => {
            createQuerySpy();

            const addEventListenerSpy = spyOn(
                permissionStatus,
                'addEventListener',
            ).and.callThrough();

            const actual: PermissionState[] = [];

            const sub = service.state('geolocation').subscribe((state) => {
                actual.push(state);
            });

            sub.unsubscribe();

            tick(QUERY_DELAY);

            expect(actual).toEqual([]);
            expect(addEventListenerSpy).not.toHaveBeenCalled();
        }));

        it('should clean up eventListener if it was added', fakeAsync(() => {
            createQuerySpy();

            const addEventListenerSpy = spyOn(
                permissionStatus,
                'addEventListener',
            ).and.callThrough();

            const removeEventListenerSpy = spyOn(
                permissionStatus,
                'removeEventListener',
            ).and.callThrough();

            const sub = service.state('geolocation').subscribe();

            expect(addEventListenerSpy).not.toHaveBeenCalled();

            tick(QUERY_DELAY);

            expect(addEventListenerSpy).toHaveBeenCalled();
            expect(removeEventListenerSpy).not.toHaveBeenCalled();

            sub.unsubscribe();

            expect(removeEventListenerSpy).toHaveBeenCalled();
        }));

        it('should throw error', fakeAsync(() => {
            const actualStatus: PermissionState[] = [];
            let actualError: Error | null = null;

            createQuerySpy(true);

            service.state('geolocation').subscribe({
                next: (status) => {
                    actualStatus.push(status);
                },
                error: (error: Error) => {
                    actualError = error;
                },
            });

            tick(QUERY_DELAY);

            expect(actualStatus).toEqual([]);
            expect(new Error('some error')).toEqual(actualError as unknown as Error);
        }));
    });

    describe('WaPermissionsService is unsupported', () => {
        let service: WaPermissionsService;
        let permissions: Permissions;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {provide: WA_PERMISSIONS, useClass: FakePermissions},
                    {provide: WA_PERMISSIONS_SUPPORT, useValue: false},
                ],
            });

            service = TestBed.inject(WaPermissionsService);
            permissions = TestBed.inject(WA_PERMISSIONS);
        });

        it('should throw an error and .query() should not be called', () => {
            const querySpy = spyOn(permissions, 'query').and.stub();
            let actualError = '';

            service.state('geolocation').subscribe({
                next: () => {},
                error: (error: string) => {
                    actualError = error;
                },
            });

            expect(actualError).toBe('Permissions is not supported in your browser');
            expect(querySpy).not.toHaveBeenCalled();
        });
    });

    describe('Token: WA_PERMISSIONS', () => {
        let permissions: Permissions;

        beforeEach(() => {
            TestBed.configureTestingModule({});

            permissions = TestBed.inject(WA_PERMISSIONS);
        });

        it('should be defined', () => {
            expect(permissions).toBeInstanceOf(window.Permissions);
        });
    });
});
