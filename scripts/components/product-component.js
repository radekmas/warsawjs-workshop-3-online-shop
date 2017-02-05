(function () {
    'use strict';
    class Product {
        constructor() {
            this.templateUrl = '/scripts/components/product-component.html';
        }
    }

    angular.module('shop')
        .component('product', new Product);
}());

