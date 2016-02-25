 module.exports = function(grunt) {

         // Project configuration.
         grunt.initConfig({
             pkg: grunt.file.readJSON('package.json'),

             watch: {
             	css: {
             		files: 'assets/css/*.scss',
             		tasks: ['sass', 'autoprefixer', 'recess']
             	},
             	//html: {
             	//	files: 'index.html',
             	//	tasks: ['']
             	//},
                javascript: {
                   files: 'assets/js/app.js',
                   tasks: ['']
                },
             	options: {
             		livereload: true
             	}
             },

             sass: {
                     dist: {
                             //options: {
                             //        includePaths: ['assets/css/'],
                             //        outputStyle: 'nested'
                             //},
                             files: {
                                     'assets/css/style.css': 'assets/css/style.scss'
                             }
                     }
             },

             autoprefixer: {
             	options: {
             		browsers: ['last 5 version', 'ie 8', 'ie 9', 'ie 10']
             	},
             	no_dest: {
             		src: 'assets/css/style.css'
             	}
             },

             recess: {
             	dist: {
             		options: {
             			compile: false,
             			compress: true
             		},
             		files: {
             			'assets/css/mini.css' : 'assets/css/style.css'
             		}
             	}
             }

         });

         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-sass');
         grunt.loadNpmTasks('grunt-autoprefixer');
         grunt.loadNpmTasks('grunt-recess');

         // Default task(s).
         grunt.registerTask('default', ['sass','autoprefixer','recess','watch']);

 };