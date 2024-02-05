"use strict";exports.id=944,exports.ids=[944],exports.modules={99944:module=>{module.exports="import {CommonModule} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {NotificationService} from '@ng-web-apis/notification';\nimport {PermissionsService} from '@ng-web-apis/permissions';\nimport {TuiBadgeModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    selector: 'notification-page-example-1',\n    imports: [CommonModule, TuiBadgeModule],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class NotificationPageExample1 {\n    private readonly notifications: NotificationService = inject(NotificationService);\n\n    readonly notificationPermissionState$ =\n        inject(PermissionsService).state('notifications');\n\n    requestPermission(): void {\n        this.notifications.requestPermission().subscribe({\n            next: permission =>\n                console.info(\n                    'Permission status:',\n                    permission, // 'denied' | 'granted'\n                ),\n            error: err =>\n                // e.g. 'Notification API is not supported in your browser'\n                console.error(err),\n        });\n    }\n}\n"}};