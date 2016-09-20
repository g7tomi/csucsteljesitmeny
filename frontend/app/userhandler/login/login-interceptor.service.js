function LoginInterceptorService($rootScope,$cookies) {
  var service = {
    request:  request,
    responseError: responseError
  };
  return service;

  function request(config) {
    var access_token = $cookies.get('accesstoken');

    if (access_token) {
      config.headers.authorization = access_token;
    }
    return config;
  };
  function responseError(response) {
    if (response.status === 401) {
      $rootScope.$broadcast('unauthorized');

    }
    return response;
  };

}
export default LoginInterceptorService;

