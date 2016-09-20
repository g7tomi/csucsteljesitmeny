<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
			<div class="login-panel panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">Please login</h3>
				</div>
				<div class="panel-body">
					<form name="loginform" ng-submit="vm.loginUser(vm.user)"   novalidate>
						<fieldset>
							<div class="form-group">
								<input class="form-control" ng-model="vm.user.email" type="text" name="email"
									id="username" required
									placeholder="email">
							</div>
							<div class="form-group">
								<input class="form-control" ng-model="vm.user.password" type="password" name="password"
									required class="form-control"
									id="password" placeholder="password">
							</div>
							<input class="btn btn-primary"   type="submit"  id="submit" value="Submit" />

						</fieldset>
					</form>
          <a class="btn btn-primary" ui-sref="registration">Registration</a>
				</div>
			</div>
		</div>
	</div>
</div>
