angular.module('cart', [])
	   .config(function($routeProvider) {                    
        $routeProvider
            .when("/cart", {
              templateUrl: "views/cart/myCart.html",
              controller: "myCartController"
            })
        })    

.controller("myCartController", function($rootScope){
 		$rootScope.title="zovilo";
 })