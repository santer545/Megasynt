/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    browserSync = require('browser-sync'),
    critical = require('critical'),
    del = require('del'),
    replace = require('gulp-replace'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger');

// Styles
gulp.task('mainStyles', function() {
    return gulp.src('sass/main-page.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 5 version'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});



gulp.task('critical-login', function() {
    critical.generate({
        inline: true,
        extract: true,
        css: ['dist/css/main-page.min.css'],
        base: './dist',
        src: './index.html',
        ignore: ['@font-face', /url\(/],
        dest: 'dist/test-critical.html',
        dimensions: [
        {
            width: 767,
        },
        ]
    });
});


gulp.task('rigger', function() {
    gulp.src('template/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'));
});



// Local server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});





// настройки путей к файлам
var rootDir = '.';
var sourceDir = rootDir + '/js'; // здесь хранятся все исходники
var destDir = rootDir + '/dist'; // здесь хранится все на выходе




// Scripts
gulp.task('homeScripts', function() {

    return gulp.src([
            sourceDir + '/jquery-2.2.1.min.js',
            sourceDir + '/modal.js',
            sourceDir + '/swiper.min.js',
            sourceDir + '/jquery.mask.js',
            sourceDir + '/home-main.js'
        ])

        //.pipe(browserify(components.scripts.options))
        .pipe(concat('all-home.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});




// Default task
gulp.task('default', function() {
    gulp.start('mainStyles', 'homeScripts');
});

gulp.task('server', function() {
    gulp.start('default', 'watch', 'browser-sync', 'rigger');
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    
    
    gulp.watch('sass/**/*.scss', ['mainStyles', browserSync.reload]);
    

    // Watch .js files
    gulp.watch('js/**/*.js', ['homeScripts', browserSync.reload]);
    // Watch image files
    //gulp.watch('assets/images/**/*', ['images', browserSync.reload]);

    //gulp.watch('assets/svg/**/*', ['svgSprite', browserSync.reload]);
    gulp.watch('template/*.html', ['rigger', browserSync.reload]);

});