(function () {
    'use strict';

    const STORAGE_KEY_NAME = 'cart';
    const EVENTS = {
        CART_UPDATE: 'cart:update'
    };

    class CartService {
        constructor(StorageService, NotificationService) {
            this.emitter = NotificationService;
            this.storage = StorageService;
            this.cart = this.storage.read(STORAGE_KEY_NAME);
            if(!this.cart) {
                this.cart = [];
            }
        }

        getCart() {
            return this.cart;
        }

        getCartSize() {
            return (this.cart) ? this.cart.length : 0;
        }

        appendCart(product, quantity) {
            debugger
            let results = this.cart.find((item) => {
                return item.product.id === product.id
            });

            if (results) {
                results.quantity += quantity;
            } else {
                this.cart.push({
                    quantity,
                    product
                });
            }

            this._closeTransaction();
            console.log('Added to cart: ', product, quantity);

        }

        clearCart() {
            this.cart = [];
            this._closeTransaction();
        }

        onUpdate(callback) {
            this.emitter.on(EVENTS.CART_UPDATE, callback);
        }

        _closeTransaction() {
            this.emitter.emit(EVENTS.CART_UPDATE, this.cart);
            this.storage.save(STORAGE_KEY_NAME, this.cart);
        }
    }

    angular.module('shop')
        .service('CartService', CartService);
}());