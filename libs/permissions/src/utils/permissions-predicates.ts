export function isGranted(
    state: NotificationPermission | PermissionState,
): state is 'granted' {
    return state === 'granted';
}

export function isDenied(
    state: NotificationPermission | PermissionState,
): state is 'denied' {
    return state === 'denied';
}

export function isPrompt(s: NotificationPermission): s is 'default';
export function isPrompt(s: PermissionState): s is 'prompt';
export function isPrompt(
    state: NotificationPermission | PermissionState,
): state is 'default' | 'prompt' {
    return state === 'prompt' || state === 'default';
}
