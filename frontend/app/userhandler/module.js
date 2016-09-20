import Login from './login/module';
import Registration from './registration/module';

export default angular.module('myapp.userhandler', [
  Registration.name,
  Login.name
])
