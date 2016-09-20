import Overview from './overview/module';
import Content from './content/module';

export default angular.module('myapp.trainings.training', [
    Overview.name,
    Content.name
])
