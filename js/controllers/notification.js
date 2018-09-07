angular.module('order', [])
	   .config(function($routeProvider) {                    
        $routeProvider
            .when("/order/notification", {
              templateUrl: "views/order/notification.html",
              controller: "orderNotificationController"
            })
        })    

.controller("orderNotificationController", function($rootScope){
 		$rootScope.title="zovilo";
 })