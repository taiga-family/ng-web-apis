"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[742],{4742:n=>{n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {NotificationService} from '@ng-web-apis/notification';\nimport {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';\nimport {fromEvent} from 'rxjs';\nimport {filter, map, switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: 'notification-page-example-4',\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class NotificationPageExample4 {\n    readonly denied$ = this.permissions.state('notifications').pipe(map(isDenied));\n\n    constructor(\n        private readonly notifications: NotificationService,\n        private readonly permissions: PermissionsService,\n    ) {}\n\n    sendNotification(): void {\n        this.notifications\n            .requestPermission()\n            .pipe(\n                filter(isGranted),\n                switchMap(() =>\n                    this.notifications.open(`Click me, please`, {\n                        body: `Then open console and investigate property \"target\"`,\n                        requireInteraction: true,\n                        data: `Randomly generated number: ${Math.random().toFixed(2)}`,\n                    }),\n                ),\n                switchMap(notification => fromEvent(notification, 'click')),\n            )\n            .subscribe(console.info);\n    }\n}\n"}}]);