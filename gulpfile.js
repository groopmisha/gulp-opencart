const domain     = 'gulp-opencart';
const theme      = 'default';  
const filesWatch = '+(twig|php|tpl|html)';

const path = {
   sass: [`catalog/view/theme/${theme}/dev/sass/*.scss`, `catalog/view/theme/${theme}/dev/sass/**/*.scss`],
   js: [`catalog/view/theme/${theme}/dev/js/app.js`],
   html: `catalog/view/theme/${theme}/template/**/*.`
}

const gulp           = require('gulp'),
      sass           = require('gulp-sass')(require('sass')),
      browserSync    = require('browser-sync'),                   
      autoprefixer   = require('gulp-autoprefixer'),              
      mediaQueries   = require('gulp-group-css-media-queries'),   
      rename         = require('gulp-rename'),                     
      cleancss       = require('gulp-clean-css'),                
      cached         = require('gulp-cached'),
      dependents     = require('gulp-dependents'),
      concat         = require('gulp-concat'),
      uglify         = require('gulp-uglify-es').default,         
      babel          = require('gulp-babel'),   
      fileInclude    = require('gulp-file-include'),  
      debug          = require('gulp-debug');                     

// Local Server
function browsersync() {
	browserSync.init({
		proxy: `${domain}`,
		notify: false,
	})
}

// Compile Styles
function styles(cb) {
   gulp.src(path.sass)
   .pipe(cached('sasscache'))
   .pipe(debug({title: 'cache pass:'}))
   .pipe(dependents())
   .pipe(debug({title: 'dependents:'}))
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({ overrideBrowserslist: ['last 5 versions'],cascade: true }))
   .pipe(mediaQueries())    
   .pipe(cleancss())        
   .pipe(rename({suffix: '.min', prefix: ''}))   
   .pipe(gulp.dest(`catalog/view/theme/${theme}/stylesheet/`))
   .on('end', cb)
   .pipe(browserSync.stream())
}

// Compile Scripts & JS Libraries
function scripts(cb) {
	gulp.src(path.js)
   .pipe(fileInclude())
	.pipe(concat('app.min.js'))
   .pipe(babel())
	.pipe(uglify())
   .pipe(debug({title: 'compiled:'}))
	.pipe(gulp.dest(`catalog/view/theme/${theme}/js`))
   .on('end', cb)
	.pipe(browserSync.stream())
}

// Watching changes
function watching() {
	gulp.watch(path.sass, styles);
   gulp.watch(path.js, scripts);
   gulp.watch([`${path.html}${filesWatch}`]).on('change', browserSync.reload);
}

exports.default = styles
exports.scripts = scripts;
exports.assets  = gulp.series(styles, scripts);
exports.watch   = gulp.parallel(styles, scripts, browsersync, watching);

