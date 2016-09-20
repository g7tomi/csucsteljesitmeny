function MainRouteConfig($stateProvider,$urlRouterProvider,$httpProvider,$locationProvider) {
    "ngInject";
    
    $urlRouterProvider.otherwise('/login-page');
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
	$locationProvider.html5Mode(true);

}
export default MainRouteConfig;