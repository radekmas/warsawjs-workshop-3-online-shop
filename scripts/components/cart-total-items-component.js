(function () {
    'use strict';
    class CartTotalItems {
        constructor() {
            this.templateUrl = '/scripts/components/cart-total-items-component.html';
            this.controller = CartTotalItemsController;
        }
    }

    class CartTotalItemsController {
        constructor(CartService) {
            this.cartService = cartService;
        }

        getTotalItems() {
            return this.cartService.getCartSize();
        }

    }

    angular.module('shop')
        .component('cart-total-items', new CartTotalItems);
}());

