
var app = angular.module('tileyRoofing', ['ui.router', 'ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngTouch'])
  .config( function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('/estimate_form', {
        url: "/estimate_form",
        templateUrl: "partials/estimate_form.html",
        // controller: "homeController"
      })
      .state('/', {
        url: "/",
        templateUrl: "partials/home.html",
        // controller: "homeController"
      })



})