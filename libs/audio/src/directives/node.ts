import {Directive, inject, type OnDestroy, type OnInit} from '@angular/core';

import {WA_AUDIO_NODE} from '../tokens/audio-node';
import {connect} from '../utils/connect';

@Directive()
export class WaNode implements OnInit, OnDestroy {
    private readonly node = inject(WA_AUDIO_NODE, {self: true});
    private readonly parent = inject(WA_AUDIO_NODE, {skipSelf: true});

    public ngOnInit(): void {
        connect(this.parent, this.node);
    }

    public ngOnDestroy(): void {
        this.node?.disconnect();
    }
}
