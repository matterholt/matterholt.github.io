'use strict';
 
const gulp = require('gulp'),
     sass = require('gulp-sass'),
     postcss = require('gulp-postcss'),
     sourcemaps = require("gulp-sourcemaps"),
     autoprefixer = require("autoprefixer")

 const nunjucksRender = require('gulp-nunjucks-render')


 sass.compiler = require('node-sass');


let paths = {
  style: {
    src: "app/scss/**/*.scss",
    dest: "app/css/"
  },
  html: {
    pages: "app/pages/**/*.+(html|njk)",
    template: "app/templates",
    partials: "app/templates/partials",
    dest: "app"
  }
}
 
function transpile() {
  return gulp
      .src(paths.style.src)
      .pipe(sass())
      .on("error",sass.logError)
      .pipe(postcss([autoprefixer() ]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.style.dest))
}

function htmlTempr (){
  return gulp
    .src("paths.html.src")
    .pipe(nunjucksRender({
      path :[paths.html.template]
    }))
    .pipe(gulp.dest(paths.html.dest))
}

exports.transpile = transpile 
exports.start = series(transpile,htmlTempr)