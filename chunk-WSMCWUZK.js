import"./chunk-GAL4ENT6.js";var i=`@switch (notificationPermissionState$ | async) {
    @case ('granted') {
        <span
            appearance="success"
            tuiBadge
        >
            Permission is granted
        </span>
    }
    @case ('denied') {
        <span
            appearance="error"
            tuiBadge
        >
            Permission is denied
        </span>
    }
    @default {
        <button
            tuiButton
            type="button"
            (click)="requestPermission()"
        >
            Request permission
        </button>
    }
}
`;export{i as default};
