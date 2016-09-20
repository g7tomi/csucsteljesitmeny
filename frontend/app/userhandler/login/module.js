/**
 * Created by fogttamas on 22/08/16.
 */
import LoginRouteConfig from './route.config';
import LoginController from './login.controller';
import LoginFactory from './login.factory';
import LoginInterceptorSerivce from './login-interceptor.service';

export default angular.module('myapp.userhandler.login', [])
  .config(LoginRouteConfig)
  .controller('LoginController', LoginController)
  .factory('LoginFactory', LoginFactory)
  .service('LoginInterceptorService', LoginInterceptorSerivce);
