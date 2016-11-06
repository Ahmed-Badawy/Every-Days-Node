
/* to use gulp you need to
    1- install node.js
    2- install gulp globally like this:     npm install -g gulp
    3- then in project you need to install gulp like this:      npm install gulp --save-dev
    4- then for each plugin_name you need to install like this:        npm install "plugin_name" --save-dev
 */
/*
    * the "default" task is the automatic runner for gulp.
    * to run the automatic runner use the "gulp" cmd command
    * if you need to specify which task to run use the "gulp task_name"
    * "npm ls" : lists files in you dependency
 */
/*
copy and past these
	npm install "gulp-minify-css" --save-dev
	npm install "gulp-autoprefixer" --save-dev
	npm install "gulp-sass" --save-dev
	npm install "gulp-uglify" --save-dev
	npm install "gulp-plumber" --save-dev
	
	npm install --save-dev gulp-stylus
	npm install --save-dev gulp-babel babel-preset-es2015

*/


var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

//Minify files with UglifyJS.
var uglify = require('gulp-uglify');


//Prevent pipe breaking caused by errors from gulp plugins & helps you to define where is the error
var plumber = require('gulp-plumber');


//require some external resources
var external_vars = require("./gulp.config.js");

var stylus = require('gulp-stylus');


//Creating a task:-
//gulp.task("task_name",[dependencies],function(){//code})


gulp.task('default',[
	'css_min',
	// 'scss_min',
    // 'scss_no_min',
	'img_min',
	'js_uglify',
	'stylus',
	'concat',
	'html-min',
	'incs',
	'babel',
	// 'notify',
	// 'watcher',
],function(){
	console.log("Finished the dependances calling");
	console.log(external_vars.external_function());
});



function errorLog(error){
	console.log.bind(error);
	// console.error.bind(error);
	this.emit('end');
}

// gulp.task('default',function(){
// 	gulp.run("css_min");
// 	// gulp.watch("css/*.css",function(){
// 	// 	gulp.run("css_min");
// 	// });

// 	gulp.run("scss_min");
// 	// gulp.watch("scss/**/*.sass",function(){
// 	// 	gulp.run("scss_min");
// 	// });	

// 	gulp.run("js_uglify");

// 	// console.log("Hello World");
// });

// gulp.task('scss_no_min',_=>gulp
//         .src('./src/scss/**/*.scss')
//         .pipe(plumber())
//         .pipe(sass())
//         .pipe(autoprefixer('last 1 version'))
//         // .on('error',errorLog)
//         .pipe(gulp.dest('./dist/scss_no_min'))
//         ;
// );
// gulp.task('scss_min',_=>gulp
// 		.src('./src/scss/**/*.scss')
// 		.pipe(plumber())		
// 		.pipe(sass())
// 		.pipe(minifycss())
// 		.pipe(autoprefixer('last 1 version'))
// 		// .on('error',errorLog)
// 		.pipe(gulp.dest('./dist/scss_min'))
// 		;
// );





 


var includer = require('gulp-htmlincluder');
var rename = require("gulp-rename");
gulp.task('incs', function() {
    gulp.src('./src/inc/*.html')
    	.pipe(includer())
        .pipe(rename('cv-ar.html'))
        .pipe(gulp.dest('./dist/inc'));
});


const imagemin = require('gulp-imagemin');
gulp.task('img_min',_=>gulp
		.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
);


var notify = require('gulp-notify');
// notify.on('click', function (options) {
//   console.log('I clicked something!', options);
// });
gulp.task('notify',_=>gulp
		.src('./src/css')
		.pipe(notify("Hello Gulp!")) //can be used without any options
		.pipe(notify({message: 'this is message', title:"this is title" })) //message,title,wait,onLast is the options
		.pipe(gulp.dest('./dist'))
	// console.log("Hello World");
);

const babel = require('gulp-babel');
gulp.task('babel',_=>gulp
		.src('./src/**/*.es6')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
);


gulp.task('css_min',_=>gulp
		.src('./src/css/**/*.css')
		.pipe(plumber())
		.pipe(minifycss())
		.pipe(autoprefixer('last 1 version'))
		.on('error',errorLog)
		.pipe(notify("Hello Gulp!"))
		.pipe(notify("Good Morning Sir"))
		.pipe(notify("Are you OK ?"))
		.pipe(gulp.dest('./dist/css'))
	// console.log("Hello World");
);

gulp.task('stylus',_=>gulp
	.src('./src/styl/**/*.styl')
	.pipe(plumber())		
    .pipe(stylus({
		compress: true,
		linenos: true,
		'include css': true,
    }))
	.pipe(autoprefixer('last 30 versions')) //auto prefix
	.pipe(minifycss()) //minify
	.pipe(gulp.dest('./dist/styl'))
);

gulp.task('js_uglify',_=>gulp
		.src('./src/js/**/*.js')
		.pipe(plumber())		
		.pipe(uglify())
		.on('error',errorLog)		
		.pipe(gulp.dest('./dist/js'))
	// console.log("Hello World");
);

var concat = require('gulp-concat');
gulp.task('concat',_=>gulp
	.src(['./src/concat/file1.js', './src/concat/file2.js', './src/concat/file1.txt','./src/concat/file4.css'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/concat'))
);

var htmlmin = require('gulp-html-minifier');
gulp.task('html-min',_=>gulp
	.src('./src/html/*.*')
    .pipe(htmlmin({
    	collapseWhitespace: true,
    	removeComments: true,
    	minifyJS: true,
    	minifyCSS: true
    }))
    .pipe(gulp.dest('./dist/html'))
);

gulp.task('watcher',function(){
    // gulp.watch("./src/scss/**/*.scss",['scss_min']);
    // gulp.watch("./src/scss/**/*.scss",['scss_no_min']);
	gulp.watch("./src/css/**/*.css",['css_min']);
	gulp.watch("./src/js/**/*.js",['js_uglify']);
	gulp.watch("./src/styl/**/*.styl",['stylus']);
	return false;			
});