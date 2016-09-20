var packageJSON = require('./package.json');
var elixir = require('laravel-elixir');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var copyDir = require('copy-dir');
var bulkSass = require('gulp-sass-bulk-import');


var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

var browserify = require('browserify')
var babelify = require('babelify')



elixir(function (mix) {
    mix.less('app.less');
});



gulp.task('build', ['buildjs', 'copy:thirdpartydev', 'copy:templates', 'copy:html', 'copy:css', 'copy:fonts','copy:fonts2', 'sass','copy:images']);

gulp.task('build-develop', ['buildjs', 'copy:html', 'copy:templates', 'sass']);



function buildjs() {
  var bundler = browserify(packageJSON.config.basedir+'/app/index.js').transform(babelify, {/* options */ })

  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(rename('app.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(packageJSON.config.destdir))
}
gulp.task('buildjs', buildjs);
          


function development() {
    watch([packageJSON.config.basedir + '/scss/app.scss', packageJSON.config.basedir + '/js/**/*.js', packageJSON.config.basedir + '/*.php', packageJSON.config.basedir + '/js/**/*.tpl']
        , function () {
            gulp.start('build-develop');
        });
}
gulp.task('development', development);



function copyHtml() {
    return gulp.src([packageJSON.config.basedir + '/index.php', packageJSON.config.basedir + '/admin.php'])
        .pipe(gulp.dest('./resources/views'));
}
gulp.task('copy:html', copyHtml);


function copySass() {
    return gulp.src(packageJSON.config.basedir + '/scss/app.scss')
		.pipe(bulkSass())
        .pipe(sass({
                    includePaths: [packageJSON.config.basedir + '/scss/stylesheets']
                }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(packageJSON.config.destdir + '/css/'));
}
gulp.task('sass', copySass);


function copyTemplates() {
    return gulp.src(packageJSON.config.basedir + '/app/**/*.tpl')
        .pipe(gulp.dest(packageJSON.config.destdir ));
}
gulp.task('copy:templates', copyTemplates);



function resetDist() {
    return gulp.src('./public/dist', {
            read: false
        })
        .pipe(clean());
}
gulp.task('resetdist', resetDist);


function copyFonts() {
    return copyDir.sync(
        'node_modules/bootstrap/dist/fonts'
        , packageJSON.config.destdir + '/fonts/bootstrap/');
}
gulp.task('copy:fonts', copyFonts);

function copyFonts2() {
    return copyDir.sync(
        'frontend/csslib/fonts'
        , packageJSON.config.destdir + '/fonts/');
}
gulp.task('copy:fonts2', copyFonts2);

function copyImages() {
    return copyDir.sync(
        'frontend/images'
        , packageJSON.config.destdir + '/images/');
}
gulp.task('copy:images', copyImages);


function buildScripts() {
    gulp.src([
        packageJSON.config.basedir + '/js/app/**/*controller.js'




            
            , packageJSON.config.basedir + '/js/app/**/*filter.js'





            
            , packageJSON.config.basedir + '/js/app/**/*service.js'






            
            , packageJSON.config.basedir + '/js/app/**/*factory.js'







            
            , packageJSON.config.basedir + '/js/app/**/*config.js'





            
            , packageJSON.config.basedir + '/js/app/**/*directive.js'






            
            , packageJSON.config.basedir + '/js/app/**/*run.js'




            
            , packageJSON.config.basedir + '/js/app/**/*module.js'





            
            , packageJSON.config.basedir + '/js/app/index.js'
    ])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate({
            add: true
        }))
        //   .pipe(uglify({
        //        mangle: true
        //   }))
        //    .pipe(rename({
        //        extname: '.min.js'
        //    }))
        .pipe(gulp.dest(packageJSON.config.destdir));

    gulp.src([
        packageJSON.config.basedir + '/js/admin/**/*controller.js'




            
            , packageJSON.config.basedir + '/js/admin/**/*filter.js'





            
            , packageJSON.config.basedir + '/js/admin/**/*service.js'






            
            , packageJSON.config.basedir + '/js/admin/**/*factory.js'







            
            , packageJSON.config.basedir + '/js/admin/**/*config.js'





            
            , packageJSON.config.basedir + '/js/admin/**/*directive.js'






            
            , packageJSON.config.basedir + '/js/admin/**/*run.js'




            
            , packageJSON.config.basedir + '/js/admin/**/*module.js'





            
            , packageJSON.config.basedir + '/js/admin/index.js'
    ])
        .pipe(concat('admin.js'))
        .pipe(ngAnnotate({
            add: true
        }))
        //    .pipe(uglify({
        //        mangle: true
        //    }))
        //     .pipe(rename({
        //         extname: '.min.js'
        //    }))
        .pipe(gulp.dest(packageJSON.config.destdir));
}
gulp.task('build:js', buildScripts);



function copyThirdParty() {
    return gulp.src([
        'node_modules/angular/angular.min.js'
            , 'node_modules/angular-ui-router/release/angular-ui-router.min.js'
            , 'node_modules/angular-animate/angular-animate.min.js'
            , 'node_modules/angular-aria/angular-aria.min.js'    
            , 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'   
            , 'node_modules/angular-messages/angular-messages.min.js'
            , 'node_modules/textangular/dist/textAngular-rangy.min.js'
            , 'node_modules/textangular/dist/textAngular-sanitize.min.js'
            , 'node_modules/textangular/dist/textAngular.min.js'
		    , 'node_modules/angular-file-upload/dist/angular-file-upload.min.js'
            , 'node_modules/angular-file-upload/dist/angular-file-upload.min.js.map'
		  	, 'node_modules/sortablejs/Sortable.min.js'
			, 'node_modules/sortablejs/ng-sortable.js'
			, 'node_modules/ui-navbar/release/js/ui-navbar.min.js'
			, 'node_modules/angular-carousel/dist/angular-carousel.min.js'
			, 'node_modules/angular-touch/angular-touch.min.js'
            , 'node_modules/lodash/dist/lodash.min.js'
		      , 'node_modules/angular-cookies/angular-cookies.min.js'

    ])
        .pipe(gulp.dest(packageJSON.config.destdir + '/lib'));
}
gulp.task('copy:thirdparty', copyThirdParty);

function copyThirdPartyDev() {
    return gulp.src([
        'node_modules/angular/angular.js'
            , 'node_modules/angular-ui-router/release/angular-ui-router.js' 
            , 'node_modules/angular-animate/angular-animate.js'       
            , 'node_modules/angular-aria/angular-aria.js'
            , 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
            , 'node_modules/angular-messages/angular-messages.js'
            , 'node_modules/textangular/dist/textAngular-rangy.min.js'
            , 'node_modules/textangular/dist/textAngular-sanitize.min.js'
            , 'node_modules/textangular/dist/textAngular.min.js'
		    , 'node_modules/angular-file-upload/dist/angular-file-upload.js'
            , 'node_modules/angular-file-upload/dist/angular-file-upload.js.map'
            , 'node_modules/sortablejs/Sortable.js'
			, 'node_modules/sortablejs/ng-sortable.js'
			, 'node_modules/ui-navbar/release/js/ui-navbar.js'
			, 'node_modules/angular-carousel/dist/angular-carousel.js'
			, 'node_modules/angular-touch/angular-touch.js'
			, 'node_modules/lodash/dist/lodash.js'
        
		      , 'node_modules/angular-cookies/angular-cookies.js'
    ])
        .pipe(gulp.dest(packageJSON.config.destdir + '/lib'));
}
gulp.task('copy:thirdpartydev', copyThirdPartyDev);


function copyCSS() {
    return gulp.src([
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
        'node_modules/textangular/dist/textAngular.css',
		, 'node_modules/ui-navbar/release/css/ui-navbar.min.css'
		, 'node_modules/angular-carousel/dist/angular-carousel.min.css'
		, 'frontend/csslib/font-awesome.min.css'
    ])
        .pipe(gulp.dest(packageJSON.config.destdir + '/css'));
}
gulp.task('copy:css', copyCSS);