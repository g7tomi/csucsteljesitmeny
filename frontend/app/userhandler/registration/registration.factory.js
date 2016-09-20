function RegistrationFactory($http, URL_CONFIG,$state){
  "ngInject"

  var service = {
    registerUser: registerUser
  };
  return service;

  function registerUser(user) {

    $http.post(URL_CONFIG.url + 'register', user).then(success, error);

    function success(data) {
      alert("Successful registration");
      $state.go('login');
    }

    function error(data) {
      console.log("error");
    }
  }
}

export default RegistrationFactory;
