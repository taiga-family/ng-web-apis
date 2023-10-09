import {filter} from 'rxjs/operators';

export function filterPermission(expectedState: PermissionState) {
    return filter<NotificationPermission | PermissionState | PushPermissionState>(
        actualState => {
            return actualState === 'default'
                ? expectedState === 'prompt'
                : actualState === expectedState;
        },
    );
}
