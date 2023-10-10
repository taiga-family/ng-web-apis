export function isGranted(
    state: PermissionState | NotificationPermission | PushPermissionState,
): state is 'granted' {
    return state === 'granted';
}

export function isDenied(
    state: PermissionState | NotificationPermission | PushPermissionState,
): state is 'denied' {
    return state === 'denied';
}

export function isPrompt(s: NotificationPermission): s is 'default';
export function isPrompt(s: PermissionState | PushPermissionState): s is 'prompt';
export function isPrompt(
    state: PermissionState | NotificationPermission | PushPermissionState,
): state is 'prompt' | 'default' {
    return state === 'prompt' || state === 'default';
}
