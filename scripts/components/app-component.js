(function () {
    'use strict';

    class AppComponent {
        constructor() {
            this.templateUrl = '/scripts/components/app-component.html';
            this.controller = AppController;
        }
    }

    class AppController {
        constructor(ProductsService){
            ProductsService.$get().then(products => {
                this.products = products;
            });
        }
    }

    angular.module('shop').component('app', new AppComponent);

}());

