(function () {
    'use strict';
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
