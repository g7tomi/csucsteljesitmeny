import MainRouteConfig from './main-route.config';
import MainRun from './main.run';


import UserHandler from './userhandler/module';
import Common from './common/module';
import Admin from './trainings/module';


angular.module('myapp', ['ui.router','ui.bootstrap','ngAnimate','ngCookies', Common.name, UserHandler.name, Admin.name])
    .config(MainRouteConfig)
    .run(MainRun)
