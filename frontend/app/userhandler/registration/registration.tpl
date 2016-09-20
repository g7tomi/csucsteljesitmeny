<div class="container">
  <div class="row">
    <form  ng-submit=" vm.registerUser(vm.user)" name="myForm">

        <fieldset class="form-group">
        <div class="col-xs-4">
          <label for="pw">Felhasználó név</label>
          <input type="text" class="form-control" ng-model="vm.user.username" id="username" placeholder="Felhasználó név">
        </div>
      </fieldset>
        <fieldset class="form-group">
            <div class="col-xs-4">
                <label for="email">E-mail</label>
              <input type="email" class="form-control" ng-model="vm.user.email" id="email" placeholder="Írd be az email címed">
            </div>
        </fieldset>
        <fieldset class="form-group">
            <div class="col-xs-4">
                <label for="email">E-mail újra</label>
              <input type="email" class="form-control" value-match="vm.user.email"   ng-model="email2" id="email" placeholder="Írd be az email címed">
            </div>
        </fieldset>
      <fieldset class="form-group">
        <div class="col-xs-4">
          <label for="pw">Jelszó</label>
          <input type="password" class="form-control" ng-model="vm.user.password" id="pw" placeholder="Írd be a jelszavad">
        </div>
      </fieldset>
     <fieldset class="form-group">
        <div class="col-xs-4">
          <label for="pw">Jelszó újra</label>
          <input type="password" class="form-control" value-match="vm.user.password"   ng-model="password2" id="pw2" placeholder="Írd be a jelszavad">
        </div>
      </fieldset>
            <fieldset class="form-group">
        <div class="col-xs-4">
          <label for="pw">Keresztnév</label>
          <input type="text" class="form-control" ng-model="vm.user.firstname" id="firstname" placeholder="Keresztnév">
        </div>
      </fieldset>    
     <fieldset class="form-group">
        <div class="col-xs-4">
          <label for="pw">Vezetéknév</label>
          <input type="text" class="form-control" ng-model="vm.user.lastname" id="firstname" placeholder="Vezetéknév">
        </div>
      </fieldset>
        <div class="form-group">
            <div class="form-group col-md-7">
                <button class="btn btn-success custom-width" type="submit">Regisztráció</button>
            </div>
        </div>
    </form>
    <a class="btn btn-warning btn-sm" ui-sref="login">Vissza</a>
  </div>
</div>
