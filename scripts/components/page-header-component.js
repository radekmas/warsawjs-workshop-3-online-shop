(function () {
    'use strict';
    class PageHeader {
        constructor() {
            this.templateUrl = '/scripts/components/page-header-component.html';
        }
    }

    angular.module('shop')
        .component('pageHeader', new PageHeader);
}());

