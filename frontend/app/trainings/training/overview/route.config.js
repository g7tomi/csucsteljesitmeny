function OverviewRouteConfig($stateProvider, BASE_DIR, $httpProvider) {
  "ngInject";
  $stateProvider
    .state('trainingsOverviews',
      {
        url : '/trainings/:trainingId',
        controller : 'TrainingOverviewController',
        controllerAs : 'vm',
        templateUrl :  BASE_DIR.path+'trainings/training/overview/overview.tpl'
      })
}
export default OverviewRouteConfig;
