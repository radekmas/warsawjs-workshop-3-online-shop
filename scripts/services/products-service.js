function ProductsServiceFactory() {
    return {
        $get() {
            return new Promise((resolve, reject) => {
                resolve([
                    {id:1, name:'rower gorski'},
                    {id:2, name:'kask'},
                    {id:3, name:'kask czerwony'}
                ]);
            });
        }
    };
}
angular.module('shop').factory('ProductsService', ProductsServiceFactory)

console.log("products-service.js załadowany")