import TrainingContentRouteConfig from './route.config';
import TrainingContentController from './content.controller';
import TrainingContentFactory from './content.factory';

export default angular.module('myapp.trainings.training.content', [])
  .config(TrainingContentRouteConfig)
  .controller('TrainingContentController', TrainingContentController)
  .factory('TrainingContentFactory', TrainingContentFactory)
 
