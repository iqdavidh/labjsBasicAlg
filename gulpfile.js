const gulp = require("gulp");
const $ = require("gulp-load-plugins")();



function reload(){

    $.livereload.listen();

    gulp.src("./")
    .pipe($.livereload());
}

gulp.task("dev_watch", ()=>{

    gulp.watch(".",{delay:1300}, reload)
});


gulp.task("script", ()=>{
   return gulp.src("./src/*.js")
       .pipe($.concat('app.js'))
       .pipe($.babel())
       .pipe(gulp.dest('./'));
});