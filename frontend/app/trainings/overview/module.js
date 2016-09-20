
import OverviewRouteConfig from './route.config';
import OverviewController from './overview.controller';
import OverviewFactory from './overview.factory';

export default angular.module('myapp.trainings.overview', [])
  .config(OverviewRouteConfig)
  .controller('OverviewController', OverviewController)
  .factory('OverviewFactory', OverviewFactory)
 
