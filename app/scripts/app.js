'use strict';
/**
 * @ngdoc overview
 * @name matWeatherApp
 * @description
 * # matWeatherApp
 *
 * AngualrJS for matWeather. Includes factory method to pull weather data and pass along to the controller for main.html.
 * Added dependecies include 'ngMaterial' for md-card elements.
 */
var app = angular
  .module('matWeatherApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'weatherCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  /*factory method to pull Yahoo weather data*/
  app.factory('weatherService', ['$http', '$q', function ($http, $q){
    function getWeather (zip) {
        var deferred = $q.defer();
        $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=')
          .success(function(data){
            deferred.resolve(data.query.results.channel);
          })
          .error(function(err){
            console.log('Error retrieving markets');
            deferred.reject(err);
          });
        return deferred.promise;
      }
      return {
        getWeather: getWeather
      };
    }]);
    /*weather controller passes current condition and forecast data along*/
    app.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
      this.isOpen=false;
      function fetchWeather(zip) {
        weatherService.getWeather(zip).then(function(data){
          $scope.place = data;
        });
      }

      fetchWeather('84105');
      $scope.findWeather = function(zip) {
            $scope.place = '';
            fetchWeather(zip);
          };
    }]);
    /*enterSearch function calls findWeather(zip) with an appropriate zip upon a 'Return' keypress*/
    app.directive('enterSearch', function(){
      return function(scope, element, attrs){
        element.bind('keydown keypress', function(event){
          if(event.which===13) {
            scope.$apply(function(){
              scope.$eval(attrs.enterSearch);
            });
            event.preventDefault();
          }
        });
      };
    });
