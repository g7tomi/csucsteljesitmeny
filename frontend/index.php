<html>
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Angular trainging">
        <meta name="author" content="tamafogt">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
        

		<link rel="stylesheet" href="http://localhost:8080/dist/css/app.css">
		<link rel="stylesheet" href="http://localhost:8080/dist/css/ui-bootstrap-csp.css">
		<link rel="stylesheet" href="http://localhost:8080/dist/css/font-awesome.min.css">
        <link rel="stylesheet" href="http://localhost:8080/dist/css/ui-navbar.min.css">
		<link rel="stylesheet" href="http://localhost:8080/dist/css/angular-carousel.min.css"/> 

        <base href="/">    
    </head>
    <body ng-app="myapp">
        <div ng-controller="HeaderController" >
            <nav class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" ng-init="navCollapsed = true" ng-click="navCollapsed = !navCollapsed">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#" ui-sref="home">Logo</a>
                </div>

                <div class="collapse navbar-collapse" uib-collapse="navCollapsed">
                    <ul class="nav navbar-nav navbar-right">
                          <li><a href="#"  ng-sref="trainings">Tréningek</a></li>
                        <li><a href="#" ng-show="isLoggedIn" ng-click="logout()"> Kijelentkezés <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span></a>    
                        <a href="#" ng-show="!isLoggedIn" ng-sref="login"> Bejelentkezés <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span></a>
                        </li>
                        <li> <a href="#" ng-show="!isLoggedIn" ng-sref="registration"> Regisztráció <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
		<ui-view/>
        <script src="http://localhost:8080/dist/lib/angular.js"></script>
        <script src="http://localhost:8080/dist/lib/angular-ui-router.js"></script>
        <script src="http://localhost:8080/dist/lib/angular-aria.js"></script> 
        <script src="http://localhost:8080/dist/lib/angular-messages.js"></script> 
        <script src="http://localhost:8080/dist/lib/angular-animate.js"></script> 
        <script src="http://localhost:8080/dist/lib/ui-bootstrap-tpls.js"></script> 
        <script src="http://localhost:8080/dist/lib/ui-navbar.js"></script> 
        <script src="http://localhost:8080/dist/lib/angular-touch.js"></script> 
        <script src="http://localhost:8080/dist/lib/angular-carousel.js"></script> 
		<script src="http://localhost:8080/dist/lib/lodash.js"></script>
		<script src="http://localhost:8080/dist/lib/angular-cookies.js"></script>
        <script src="http://localhost:8080/dist/app.min.js"></script>    
    
    </body>
</html>
