function LoginRouteConfig($stateProvider, BASE_DIR, $httpProvider) {
  "ngInject";
  $stateProvider
    .state('login',
      {
        url : '/login-page',
        controller : 'LoginController',
        controllerAs : 'vm',
        templateUrl :  BASE_DIR.path+'userhandler/login/login.tpl'
      })
  $httpProvider.interceptors.push('LoginInterceptorService')

}
export default LoginRouteConfig;
