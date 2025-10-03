import {inject, InjectionToken} from '@angular/core';

import {WA_NAVIGATOR} from './navigator';

// http://wicg.github.io/netinfo/#navigatornetworkinformation-interface
declare interface NavigatorNetworkInformation {
    readonly connection?: NetworkInformation;
}

// http://wicg.github.io/netinfo/#connection-types
type ConnectionType =
    | 'bluetooth'
    | 'cellular'
    | 'ethernet'
    | 'mixed'
    | 'none'
    | 'other'
    | 'unknown'
    | 'wifi'
    | 'wimax';

// http://wicg.github.io/netinfo/#effectiveconnectiontype-enum
type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';

// http://wicg.github.io/netinfo/#dom-megabit
type Megabit = number;

// http://wicg.github.io/netinfo/#dom-millisecond
type Millisecond = number;

// http://wicg.github.io/netinfo/#networkinformation-interface
interface NetworkInformation extends EventTarget {
    // http://wicg.github.io/netinfo/#type-attribute
    readonly type?: ConnectionType;
    // http://wicg.github.io/netinfo/#effectivetype-attribute
    readonly effectiveType?: EffectiveConnectionType;
    // http://wicg.github.io/netinfo/#downlinkmax-attribute
    readonly downlinkMax?: Megabit;
    // http://wicg.github.io/netinfo/#downlink-attribute
    readonly downlink?: Megabit;
    // http://wicg.github.io/netinfo/#rtt-attribute
    readonly rtt?: Millisecond;
    // http://wicg.github.io/netinfo/#savedata-attribute
    readonly saveData?: boolean;
    // http://wicg.github.io/netinfo/#handling-changes-to-the-underlying-connection
    onchange?: EventListener;
}

export const WA_NETWORK_INFORMATION = new InjectionToken<NetworkInformation | null>(
    '[WA_NETWORK_INFORMATION]',
    {
        factory: () =>
            inject<NavigatorNetworkInformation>(WA_NAVIGATOR).connection || null,
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_NETWORK_INFORMATION}
 */
export const NETWORK_INFORMATION = WA_NETWORK_INFORMATION;
