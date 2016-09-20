import AdminRouteConfig from './route.config';
import AdminController from './admin.controller';

export default angular.module('myapp.admin', [])
        .config(AdminRouteConfig)
        .controller('AdminController', AdminController)
