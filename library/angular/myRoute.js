var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/dashboard", {
      templateUrl: "/dashboard/dashboard.html",
    })
    .when("/clients", {
      templateUrl: "/dashboard/clients.html",
    })
    .when("/products", {
      templateUrl: "/dashboard/products.html",
    })
    .otherwise({
      redirectTo: "dashboard",
    });
});
