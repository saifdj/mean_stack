var gulp = require("gulp"); //Task manager
var jshint = require("gulp-jshint") //internally used by gulp for intelligence, style check, semicolans ..

var jsFiles = ['*.js', 'src/**/*.js']; //all files in src folder and root folder

gulp.task("style", function() { //we can execute this call back by running "gulp style" from terminal, to install gulp use "npm install --save-dev jshint gulp-jshint"

    return gulp.src(jsFiles).pipe(jshint()); //checking style for all files in "jsFiles"
});


gulp.task("inject", function() {

    var wiredep = require("wiredep").stream; //used to inject jquery and bootstrap in html file dynamically check bower:css & bower:js comments in html
    var options = {
        bowerJson: require("./bower.json"),
        directory: "./bower_components" //dependencies
    }
    return gulp.src("./src/views/*.html")
          .pipe(wiredep(options))
          .pipe(gulp.dest("./src/views"));
});