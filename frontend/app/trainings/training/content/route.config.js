function TrainingContentRouteConfig($stateProvider, BASE_DIR, $httpProvider) {
  "ngInject";
  $stateProvider
    .state('trainingcontent',
      {
        url : '/trainings/:trainingId/:contentId',
        controller : 'TrainingContentController',
        controllerAs : 'vm',
        templateUrl :  BASE_DIR.path+'trainings/training/content/content.tpl'
      })
}
export default TrainingContentRouteConfig;
