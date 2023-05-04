import {ChangeDetectionStrategy, Component} from '@angular/core';

class ShopItem implements PaymentItem {
    constructor(readonly image: string, readonly label: string, readonly price: number) {}

    get amount(): PaymentCurrencyAmount {
        return {
            currency: 'RUB',
            value: String(this.price),
        };
    }
}

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent {
    readonly items: readonly ShopItem[] = [
        new ShopItem(
            'https://image.flaticon.com/icons/svg/1868/1868178.svg',
            'Matryoshka',
            50,
        ),
        new ShopItem(
            'https://image.flaticon.com/icons/svg/820/820158.svg',
            'Balalaika',
            100,
        ),
        new ShopItem(
            'https://image.flaticon.com/icons/svg/1868/1868169.svg',
            'Ushanka',
            70,
        ),
        new ShopItem(
            'https://image.flaticon.com/icons/svg/1868/1868226.svg',
            'Kokoshnik',
            70,
        ),
        new ShopItem(
            'https://image.flaticon.com/icons/svg/1868/1868276.svg',
            'Borscht',
            10,
        ),
        new ShopItem(
            'https://image.flaticon.com/icons/svg/1868/1868380.svg',
            'Sputnik',
            1000,
        ),
    ];

    shippingCart: readonly ShopItem[] = [];

    get totalSum() {
        return this.shippingCart.reduce((sum, item) => {
            return sum + item.price;
        }, 0);
    }

    get total(): PaymentItem {
        return {
            label: 'Total',
            amount: {
                currency: 'RUB',
                value: String(this.totalSum),
            },
        };
    }

    addToShippintCard(item: ShopItem) {
        this.shippingCart = [...this.shippingCart, item];
    }

    onPayment(response: PaymentResponse) {
        console.info('payment response:', response);
        this.clearShippingCart();
        response.complete();
    }

    onPaymentError(error: Error | DOMException) {
        console.info('payment error:', error);
        this.clearShippingCart();
    }

    private clearShippingCart() {
        this.shippingCart = [];
    }
}
