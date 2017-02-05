(function () {
    'use strict';
    class PageHeader {
        constructor() {
            this.templateUrl = '/scripts/components/page-header-component.html';
            this.controller = PageHeaderController;

        }
    }

    class PageHeaderController  {
        constructor(CartService) {
            this.cartService = CartService;
        }
    }

    angular.module('shop')
        .component('pageHeader', new PageHeader);
}());

