angular.module('legal', [])
	   .config(function($routeProvider) {                    
        $routeProvider
            .when("/legal/privacy_policy", {
              templateUrl: "views/legal/privacyPolicy.html",
              controller: "privacyPolicyController"
            })
            .when("/legal/terms_conditions", {
              templateUrl: "views/legal/termsConditions.html",
              controller: "termsConditionsController"
            })
            .when("/legal/refund_cancellation", {
              templateUrl: "views/legal/refundCancellation.html",
              controller: "refundCancellationController"
            })
        })    

.controller("refundCancellationController", function($rootScope){
 		$rootScope.title="zovilo";
 })