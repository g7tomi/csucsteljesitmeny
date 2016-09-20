import Overview from './overview/module';
import Training from './training/module';
export default angular.module('myapp.trainings', [
    Overview.name,
    Training.name
])

