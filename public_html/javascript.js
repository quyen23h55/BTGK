var app = angular.module('myApp', []);
            app.controller('customersCtrl', function($scope, $http) {
              $http.get("myData.json").then(function (response) {
                  $scope.data = response.data;                  
                  $scope.name = $scope.data.profile.name;
                  $scope.headline = $scope.data.profile.headline;
                  $scope.region = $scope.data.profile.region;
                  $scope.fb = $scope.data.profile.facebook;
                  $scope.gmail = $scope.data.profile.gmail;
                  $scope.phone = $scope.data.profile.phone;
                  $scope.description = $scope.data.sumary.description;
                  $scope.title = "";
                  $scope.content = "";
                  $scope.addresume = "";
                  $scope.explogo = "";
                  $scope.exptitle = "";
                  $scope.expsubtitle = "";
                  $scope.exptime = "";
                  
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
                  
                  $scope.display_description = false;
                  $scope.show_description = true;
                  
                  $scope.display_plush = false;
                  $scope.show_plush = true;
                  $scope.show_title = false;
                  
                  $scope.display_resume = false;
                  $scope.display_experience = false;
                  $scope.display_addexperience = false;
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
            $scope.savedescription = function(index){
                  $scope.data.sumary[index].description = $scope.test;
                  $scope.display_description = false;
                  $scope.show_description = true;
            }
            $scope.canceldescription = function(){
                  $scope.description = $scope.data.sumary.description;
                  $scope.display_description = false;
                  $scope.show_description = true;  
            }
            $scope.clicksummary = function(index){
              $scope.display_description = true;
              $scope.show_description = true;;
              $scope.test = $scope.data.sumary[index].description;
              $scope.i = index;
              
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
            $scope.saveaddresume = function(){
                $scope.data.sumary.push({description:$scope.addresume});
                $scope.display_addresume = false;
                $scope.addresume = "";
            }
            $scope.canceladdresume = function(){
                $scope.addresume = "";
                $scope.display_addresume = false;
            }
            $scope.clickexperience = function(index){
                $scope.display_experience = true;
                $scope.explogo = $scope.data.experience[index].logo;
                $scope.exptitle = $scope.data.experience[index].title;
                $scope.expsubtitle = $scope.data.experience[index].subtitle;
                $scope.exptime = $scope.data.experience[index].time;
                $scope.iexp = index;
            }
            $scope.saveexperience = function(index){
                //$scope.data.experience.push({logo:$scope.explogo,title:$scope.exptitle,subtitle:$scope.exptime});
                $scope.display_experience = false;
                $scope.data.experience[index].logo = $scope.explogo;
                $scope.data.experience[index].title = $scope.exptitle;
                $scope.data.experience[index].subtitle = $scope.expsubtitle;
                $scope.data.experience[index].time = $scope.exptime;
            }
            $scope.cancelexperience = function(){
                $scope.display_experience = false;
                $scope.explogo = "";
                $scope.exptitle = "";
                $scope.expsubtitle = "";
                $scope.exptime = "";
            }
            $scope.saveaddexperience = function(){
                $scope.data.experience.push({logo:$scope.explogo,title:$scope.exptitle,subtitle:$scope.exptime});
                $scope.display_addexperience = false;
                $scope.explogo = "";
                $scope.exptitle = "";
                $scope.expsubtitle = "";
                $scope.exptime = "";
            }
            });
