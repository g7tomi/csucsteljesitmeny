function MainRun($rootScope, $log,$http) {
    "ngInject";
	 $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) { 
         $log.debug('$stateChangeStart', arguments); 
     });

     $rootScope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams) { 
         $log.debug('$stateNotFound', arguments); 
     });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
        $log.debug('$stateChangeSuccess', arguments);
    });

     $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) { 
         $log.debug('$stateChangeError', arguments); 
     });
}
export default MainRun;