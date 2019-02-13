

function htmlTemp() {
    return gulp
      .src('app/pages/**/*.+(html|njk)')
      .pipe(data(function(){
        return require('./app/data.json')
      }))
      .pipe(nunjucksRender({
        path: ['app/templates/']
      }))
      .pipe(gulp.dest('app'));
  }
  
  
  function style() {
    return gulp
      .src(paths.style.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.style.dest));
  }