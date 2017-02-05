(function () {
    'use strict';

    class ProductComponent {
        constructor() {
            this.bindings = {
                product: '<',
                onDelete: '&'
            };

            this.templateUrl = '/scripts/components/product-component.html';
            this.controller = ProductComponentController
        }
    }

    class ProductComponentController {
        constructor(CartService) {
            this.product = null;
            this.cartService = CartService;
            this.amount = 1;
        }

        addToCart(product) {
            console.log('product', product);
            console.log('service', this.cartService);
            this.cartService.appendCart(product, this.amount);
            this.amount = 1;
        }
    }

    angular.module('shop')
        .component('product', new ProductComponent);
}());

