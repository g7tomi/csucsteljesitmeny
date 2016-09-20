function LoginRouteConfig($stateProvider, BASE_DIR) {
    "ngInject";
    $stateProvider
            .state('admin',
					{
						url : '/admin',
						controller : 'AdminController',
						controllerAs : 'vm',
						templateUrl :  BASE_DIR.path+'admin/admin.tpl'
                    })

}
export default LoginRouteConfig;