var gulp        = require("gulp");
var bower       = require("main-bower-files");
var concat      = require("gulp-concat");


gulp.task("bower:assets:js", function() {

    gulp.src(bower({filter: "**/*.js"}))
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest("./vendor/js"));

});

gulp.task("bower:assets:css", function() {

    gulp.src(bower({filter: "**/*.css"}))
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest("./vendor/css"));

});


gulp.task("default", ["bower:assets:js", "bower:assets:css"], function() {

    gulp.watch("bower.json", ["bower:assets:js", "bower:assets:css"]);

});