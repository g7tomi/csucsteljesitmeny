import Constants from './common_constants/module';
import Directives from './common_directives/module';
import Header from './header/module';


export default angular.module('myapp.commonmodule', [Constants.name, Directives.name,Header.name])

