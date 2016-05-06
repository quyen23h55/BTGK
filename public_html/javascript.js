var app = angular.module('myApp', []);
            app.controller('customersCtrl', function($scope, $http) {
              $http.get("myData.json").then(function (response) {
                  $scope.data = response.data;
                  $scope.data.experience.push({logo:"img/linkedin.png",title:$scope.name,subtitle:"LinkedIn",time:"April 2016"});                  
                  $scope.name = $scope.data.profile.name;
                  $scope.headline = $scope.data.profile.headline;
                  $scope.region = $scope.data.profile.region;
                  $scope.fb = $scope.data.profile.facebook;
                  $scope.gmail = $scope.data.profile.gmail;
                  $scope.phone = $scope.data.profile.phone;
                  $scope.description1 = $scope.data.sumary.description1;
                  $scope.title = "";
                  $scope.content = "";
                  
                  $scope.display = false;
                  $scope.show = true;
                  $scope.display_headline = false;
                  $scope.show_headline = true;
                  $scope.display_region = false;
                  $scope.show_region = true;
                  $scope.display_fb = false;
                  $scope.show_fb = true;
                  $scope.display_gmail = false;
                  $scope.show_gmail = true;
                  $scope.display_phone = false;
                  $scope.show_phone = true;
                  $scope.display_description1 = false;
                  $scope.show_description1 = true;
                  $scope.display_plush = false;
                  $scope.show_plush = true;
                  $scope.show_title = false;
              });
              $scope.save = function(){
                  $scope.data.profile.name = $scope.name;
                  $scope.display = false;
                  $scope.show = true;
              }
              $scope.cancel = function(){
                  $scope.display = false;
                  $scope.show = true;
                  $scope.name = $scope.data.profile.name;
              }
              
              $scope.saveheadline = function(){
                  $scope.data.profile.headline = $scope.headline;
                  $scope.display_headline = false;
                  $scope.show_headline = true;
              }
              $scope.cancelheadline = function(){
                 $scope.display_headline = false;
                  $scope.show_headline = true;
                  $scope.headline = $scope.data.profile.headline;
              }
              
              $scope.saveregion = function(){
                  $scope.data.profile.region = $scope.region;
                  $scope.display_region = false;
                  $scope.show_region = true;
              }
              $scope.cancelregion = function(){
                  $scope.region = $scope.data.profile.region;
                  $scope.display_region = false;
                  $scope.show_region = true;
              }
              $scope.savefb = function(){
                  $scope.data.profile.facebook = $scope.fb;
                  $scope.display_fb = false;
                  $scope.show_fb = true;
              }
              $scope.cancelfb = function(){
                  $scope.fb = $scope.data.profile.facebook;
                  $scope.display_fb = false;
                  $scope.show_fb = true;
              }
              $scope.savegmail = function(){
                  $scope.data.profile.gmail = $scope.gmail;
                  $scope.display_gmail = false;
                  $scope.show_gmail = true;
            }
            $scope.cancelgmail = function(){
                  $scope.gmail = $scope.data.profile.gmail;
                  $scope.display_gmail = false;
                  $scope.show_gmail = true;
            }
            $scope.savephone = function(){
                  $scope.data.profile.phone = $scope.phone;
                  $scope.display_phone = false;
                  $scope.show_phone = true;
}
            $scope.cancelphone = function(){
                  $scope.phone = $scope.data.profile.phone;
                  $scope.display_phone = false;
                  $scope.show_phone = true;
            }
            $scope.savedescription1 = function(){
                  $scope.data.sumary.description1 = $scope.description1;
                  $scope.display_description1 = false;
                  $scope.show_description1 = true;
}
            $scope.canceldescription1 = function(){
                  $scope.description1 = $scope.data.sumary.description1;
                  $scope.display_description1 = false;
                  $scope.show_description1 = true;                 
            }
            $scope.saveplush= function(){
                  $scope.data.profileplush.push({title:$scope.title,content:$scope.content});
                  $scope.display_plush = false;
                  $scope.show_plush = true;
                  $scope.title = "";
                  $scope.content = "";
                  $scope.show_title = false;
            }  
            $scope.cancelplush = function(){
                  $scope.display_plush = false;
                  $scope.show_plush = true;
                  $scope.title = "";
                  $scope.content = "";  
                  $scope.show_title = false;
            }
            });
