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
            this.title = 'Witamy na WarsawJS'
            let promise = ProductsService.$get().then(products => {
                this.products = products;
                //$scope.apply();
                return {"myKey":"myValue"};
            });

            promise.then(daneDwa => console.log('dane dwa: ', daneDwa))
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

