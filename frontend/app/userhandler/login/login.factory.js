/**
 * Created by fogttamas on 23/08/16.
 */
function LoginFactory($http, URL_CONFIG, $cookies, $state){
  "ngInject"

  var service = {
    loginUser: loginUser,
    logoutUser: logoutUser
  };
  return service;

  function loginUser(user) {

        var req ={
			method: 'POST',
			url: URL_CONFIG.url + 'oauth/access_token',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'charset': 'charset=UTF-8'
			},
			transformRequest: function(obj) {
				var str = [];
                obj.grant_type = 'password';
                obj.client_id = 'f3d259ddd3ed8ff3843839b';
                obj.client_secret = '4c7f6f8fa93d59c45502c0ae8c4a95b';
				for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				return str.join("&");
			},
			data: user
		};

    $http(req).then(success, error);

    function success(data) {


      $cookies.put('accesstoken', data.data.token_type + " " + data.data.access_token);
      $state.go('trainings');
    }

    function error(data) {
      console.log("success");
    }
  }
  function logoutUser() {
    $http.post(URL_CONFIG.url + 'api/Users/logout').then(success, error);

    function success(data) {
      $cookies.remove('accesstoken');
      $state.go('login');
    }

    function error(data) {
      console.log("error");
    }



  }
}

export default LoginFactory;
