"use strict";var gulp=require("gulp"),browserSync=require("browser-sync").create();gulp.task("serve",function(){browserSync.init({server:{baseDir:"./dist"}}),gulp.watch("src/*.html").on("change",browserSync.reload)}),gulp.task("move-html",function(){return gulp.src("src/*.html").pipe(gulp.dest("dist/"))});