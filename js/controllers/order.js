angular.module('order', [])
	   .config(function($routeProvider) {                    
        $routeProvider
            .when("/user/orders", {
              templateUrl: "views/order/userOrders.html",
              controller: "userOrdersController"
            })
        })    

.controller("userOrdersController", function($rootScope){
 		$rootScope.title="zovilo";
 })