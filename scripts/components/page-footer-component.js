(function () {
    'use strict';
    class PageFooter {
        constructor() {
            this.templateUrl = '/scripts/components/page-footer-component.html';
        }
    }

    angular.module('shop')
        .component('pageFooter', new PageFooter);
}());

