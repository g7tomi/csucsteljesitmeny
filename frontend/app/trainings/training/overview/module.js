import TrainingOverviewRouteConfig from './route.config';
import TrainingOverviewController from './overview.controller';
import TrainingOverviewFactory from './overview.factory';

export default angular.module('myapp.trainings.training.overview', [])
  .config(TrainingOverviewRouteConfig)
  .controller('TrainingOverviewController', TrainingOverviewController)
  .factory('TainingOverviewFactory', TrainingOverviewFactory)
 
