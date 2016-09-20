function OverviewRouteConfig($stateProvider, BASE_DIR, $httpProvider) {
  "ngInject";
  $stateProvider
    .state('trainings',
      {
        url : '/trainings',
        controller : 'OverviewController',
        controllerAs : 'vm',
        templateUrl :  BASE_DIR.path+'trainings/overview/overview.tpl'
      })
}
export default OverviewRouteConfig;
