function RegistrationRouteConfig($stateProvider, BASE_DIR) {
  "ngInject";
  $stateProvider
    .state('registration',
      {
        url : '/registration',
        controller : 'RegistrationController',
        controllerAs : 'vm',
        templateUrl : BASE_DIR.path+'userhandler/registration/registration.tpl'
      })



}export default RegistrationRouteConfig;
