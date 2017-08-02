var gulp = require("gulp"); //Task manager
var jshint = require("gulp-jshint") //internally used by gulp for intelligence, style check, semicolans ..

var jsFiles = ['*.js', 'src/**/*.js']; //all files in src folder and project root folder

gulp.task("style", function() { //we can execute this call back by running "gulp style" from terminal, to install gulp use "npm install --save-dev jshint gulp-jshint"
//this task is to check js files, does nothing, no injection in html
    return gulp.src(jsFiles).pipe(jshint()); //checking style for all files in "jsFiles"
});


gulp.task("inject", function() {

    var wiredep = require("wiredep").stream; //used to inject jquery and bootstrap in html file dynamically check bower:css & bower:js comments in html

    //var inject = require("gulp-inject"); //used to inject js & css files in public folder into html file, check inject:css & inject:js comments in html

    var injectSrc = gulp.src(["./public/bootstrap_templates/nice_to_meet_you/css/*.css", "./public/bootstrap_templates/nice_to_meet_you/js/*.js"]) //from here custom css & js files are taken
    var injectOptions = {
        ignorePath: "/public"
    }


    var options = {
        bowerJson: require("./bower.json"),
        directory: "./bower_components", //dependencies adding, from here bootstrap core js and jquery files are taken by wiredep
        ignorePath: "../../bower_components" //this is used to ignore the given prefix for dynamically injected files in html
    }
    return gulp.src("./src/views/*.html")
          .pipe(wiredep(options))
          .pipe(gulp.dest("./src/views"));

          //    .pipe(inject(injectSrc, injectOptions))
});