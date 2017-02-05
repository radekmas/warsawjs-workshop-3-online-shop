function ProductsServiceFactory($http) {
    return {
        $get() {
            return $http.get('data/products.json')
                .then(data => data.data.products);

        },
        $delete() {

        }

    };
}
angular.module('shop').factory('ProductsService', ProductsServiceFactory)

console.log("products-service.js załadowany")