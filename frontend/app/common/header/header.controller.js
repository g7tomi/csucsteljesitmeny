function HeaderController($scope) {
  "ngInject"
  
    $scope.isLoggedIn =false;
    $scope.logout =logout();
    
    function logout(){
        console.log("TODO logout")
    }
}
export default HeaderController;
