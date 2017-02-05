(function () {
    'use strict';

    class AppComponent {
        constructor() {
            this.templateUrl = '/scripts/components/app-component.html';
            this.controller = AppController;
        }
    }

    class AppController {
        constructor(){
            this.title = 'Witamy na WarsawJS'
            this.products = [
                {id:1, name:'rower gorski'},
                {id:2, name:'kask'},
                {id:3, name:'kask czerwony'}
            ]
        }

        onTitleClick() {
            console.log("clicked");
        }
    }

    angular.module('shop').component('app', new AppComponent);

    angular.module('shop').filter('wiecej', function() { //factory function
       return function (value, len) {
           console.log('FILTER: ' + value)
           if(value && value.length > len) {
               return value.substr(0,len) + '... czytaj wiecej';
           }
           return value;
       }
    });
}());

