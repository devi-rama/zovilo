angular.module('trial', [])
	   .config(function($routeProvider) {                    
        $routeProvider
            .when("/trialPage", {
              templateUrl: "trialPage.html",
              controller: "trialPageController"
            })
            
        })    

.controller("trialPageController", function($rootScope){
 		$rootScope.title="zovilo";
 })