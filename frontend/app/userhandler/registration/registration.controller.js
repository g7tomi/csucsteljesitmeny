/**
 * Created by fogttamas on 22/08/16.
 */
'use strict';
function RegistrationController(RegistrationFactory) {
  "ngInject"
  var vm = this;

  vm.registerUser = registerUser;

  function registerUser(user) {
    RegistrationFactory.registerUser(user);
  }
}
export default RegistrationController;
