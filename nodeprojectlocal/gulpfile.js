var gulp = require("gulp"); //Task manager
var jshint = require("gulp-jshint"); //internally used by gulp for intelligence, style check, semicolans ..
var nodemon = require("gulp-nodemon"); //saves modified files, does/executes injection


var jsFiles = ['*.js', 'src/**/*.js']; //all files in src folder and project root folder

gulp.task("style", function() { //we can execute this call back by running "gulp style" from terminal, to install gulp use "npm install --save-dev jshint gulp-jshint"
//this task is to check js files, does nothing, no injection in html
    return gulp.src(jsFiles).pipe(jshint()); //checking style for all files in "jsFiles"
});


gulp.task("inject", function() {

    var wiredep = require("wiredep").stream; //used to inject jquery and bootstrap in html file dynamically check bower:css & bower:js comments in html

    var inject = require("gulp-inject"); //used to inject our custom js & css files in public folder into html file, check inject:css & inject:js comments in html

    var injectSrc = gulp.src(["./public/bootstrap_templates/nice_to_meet_you/css/*.css", "./public/bootstrap_templates/nice_to_meet_you/js/*.js"]) //from here custom css & js files are taken
    var injectOptions = {
        
    }// ignorePath: "/public" //this public path variable is not shown in .html file at custom css linking


    var options = {
        bowerJson: require("./bower.json"), //tell wiredep to look depdencencies in bower.json, our dependency is "bootstrap v^3.3.7"
        directory: "./bower_components" //path for dependencies, from here bootstrap core js and jquery files are taken by wiredep
    } //ignorePath: "../../bower_components" //this is used to ignore the given prefix for dynamically injected files in html
    return gulp.src("./src/views/*.ejs") //path for files which on which injection has to happen(code is added dynamically to these files) 
          .pipe(wiredep(options))
          .pipe(inject(injectSrc, injectOptions))
          .pipe(gulp.dest("./src/views"));
});

gulp.task('serve', ['style','inject'], function() { //runs the tasks present in second param, when the task "serve" is run from terminal

        var options = {
            script: 'app.js', //this script to run when server starts
            delayTime: 1, //seconds
            watch: jsFiles //nodemon watches these files for changes, if files are modifeid server is restarted
        } 

        return nodemon(options)
               .on("restart", function(ev) { //on server restart this func executes
           
            console.log("Restarting server... ")
        })
});