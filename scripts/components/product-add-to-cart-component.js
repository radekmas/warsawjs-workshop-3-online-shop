(function () {
    'use strict';

    class ProductAddToCartComponent {
        constructor() {
            this.bindings = {
                productIndex: '='
            };
            this.require = {
                product: '^^'
            };
            this.controller = ProductAddToCartController;
            this.templateUrl = '/scripts/components/product-add-to-cart-component.html';
        }
    }

    class ProductAddToCartController {
        constructor() {
            this.product = null;
        }

        $onInit() {
            this.product = this.productList.getProductByIndex(this.productIndex);
        }

        addToCart(index) {
            this.productList.productAddToCart(index);
        }
    }


    angular.module('shop')
        .component('product-add-to-cart', new ProductAddToCartComponent);
}());

