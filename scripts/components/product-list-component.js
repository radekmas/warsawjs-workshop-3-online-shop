(function () {
    'use strict';
    class ProductList {
        constructor() {
            this.templateUrl = '/scripts/components/product-list-component.html';
        }
    }

    angular.module('shop')
        .component('productList', new ProductList);
}());

