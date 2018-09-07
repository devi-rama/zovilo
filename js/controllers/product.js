angular.module('product', [])
	   .config(function($routeProvider) {                    
        $routeProvider
            .when("/product/category", {
              templateUrl: "views/product/productCategory.html",
              controller: "productCategoryController"
            })
            .when("/product/list/:id", {
              templateUrl: "views/product/productList.html",
              controller: "productListController"
            })
            .when("/product/brands", {
              templateUrl: "views/product/productBrands.html",
              controller: "productBrandsController"
            })
            .when("/product/intro", {
              templateUrl: "views/product/productIntro.html",
              controller: "productIntroController"
            })
            .when("/product/offer", {
              templateUrl: "views/product/productOffer.html",
              controller: "productOfferController"
            })
            .when("/product/detail/:id", {
              templateUrl: "views/product/productDetail.html",
              controller: "productDetailController"
            })


        })    

.controller("productCategoryController", function($rootScope){
 		$rootScope.title="zovilo";
 })
.controller("productListController", function($rootScope){
  		$rootScope.title="zovilo";
 })
.controller("productBrandsController", function($rootScope){
  		$rootScope.title="zovilo";
 })
.controller("productIntroController", function($rootScope){
  		$rootScope.title="zovilo";
 })
.controller("productOfferController", function($rootScope){
  		$rootScope.title="zovilo";
 })
.controller("productDetailController", function($rootScope){
      $rootScope.title="zovilo";
 })




