(function () {
    'use strict';
    class ProductListComponent {
        constructor() {
            this.templateUrl = '/scripts/components/product-list-component.html';
            this.controller = ProductListComponentController;
        }
    }

    class ProductListComponentController {
        constructor(ProductsService) {
            this.products = [];
            this.ProductsService = ProductsService;
        }

        $onInit() {
            this.ProductsService.$get()
                .then((data) => {
                    console.log('data', data);
                    this.products = this.products.concat(data);
                });
        }

        getProductByIndex(index) {
            return this.products[index];
        }

        onProductClick(product) {
            console.log("Product clicked: ", product);
        }

        onProductDelete(product, index) {
            this.products.splice(index, 1);
        }
    }

    angular.module('shop')
        .component('productList', new ProductListComponent);
}());

