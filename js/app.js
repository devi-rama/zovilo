  var app = angular.module("zovilo", [
    "ngRoute",
    "home",
    "product",
    "order",
    "profile",
    "cart",
    "legal",
    "trial"
  ])
  .config(function($routeProvider) {                    
          $routeProvider
            .when("/", {
              templateUrl: "views/home.html",
              controller: "homeController"
            })
            .otherwise({ 
              templateUrl: "views/error/404.html"
            })
  })
  


  
  
     