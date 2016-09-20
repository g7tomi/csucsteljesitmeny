/**
 * Created by fogttamas on 22/08/16.
 */
function LoginController(LoginFactory) {
  "ngInject"
  var vm = this;


  vm.loginUser = loginUser;

  function loginUser(user) {

    LoginFactory.loginUser(user);
  }

}
export default LoginController;
