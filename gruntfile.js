module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			target: {
				files: [{
					expand: true,
					cwd: 'js',
					src: ['*.js', '!*.min.js'],
					dest: 'js',
					ext: '.min.js'
				}]
			}
		},
		watch: {
			options: {
				livereload: true 
			},
			cssmin: {
				files: ['css/*.css', '!css/*.min.css'],
				tasks: ['cssmin']
			},
			uglify: {
				files: ['js/*.js', '!js/*.min.js'],
				tasks: ['uglify']
			}
		},
		express: {
			all: {
				options: {
					port: 9000,
					hostname: 'localhost',
					bases: ['.'],
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('server', ['express', 'watch']);
}