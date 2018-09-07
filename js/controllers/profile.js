angular.module('profile', [])
	   .config(function($routeProvider) {                    
        $routeProvider
            .when("/user/profile", {
              templateUrl: "views/profile/userProfile.html",
              controller: "userProfileController"
            })
            .when("/user/rewards", {
              templateUrl: "views/profile/userRewards.html",
              controller: "userRewardsController"
            })
            .when("/user/wishlist", {
              templateUrl: "views/profile/userWishlist.html",
              controller: "userWishlistController"
            })
            .when("/user/address", {
              templateUrl: "views/profile/userAddress.html",
              controller: "userAddressController"
            })
            .when("/user/reviews", {
              templateUrl: "views/profile/userReviews.html",
              controller: "userReviewsController"
            })
            .when("/user/changepassword", {
              templateUrl: "views/profile/changePassword.html",
              controller: "changePasswordController"
            })
            .when("/user/edit-profile", {
              templateUrl: "views/profile/editProfile.html",
              controller: "editProfileController"
            })
            .when("/zCashPoint", {
              templateUrl: "views/profile/zCashPoint.html",
              controller: "zCashPointController"
            })
            
            
        })    

.controller("userProfileController", function($rootScope){
 		$rootScope.title="zovilo";
 })
.controller("userRewardsController", function($rootScope){
 		$rootScope.title="zovilo";
 })
.controller("userWishlistController", function($rootScope){
 		$rootScope.title="zovilo";
 })
.controller("userAddressController", function($rootScope){
 		$rootScope.title="zovilo";
 })
.controller("userReviewsController", function($rootScope){
 		$rootScope.title="zovilo";
 })
.controller("changePasswordController", function($rootScope){
 		$rootScope.title="zovilo";
 })
.controller("editProfileController", function($rootScope){
 		$rootScope.title="zovilo";
 })
.controller("zCashPointController", function($rootScope){
 		$rootScope.title="zovilo";
 })





