module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		cssmin: {
			css: {
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
			js: {
				files: [{
					expand: true,
					cwd: 'js',
					src: ['*.js', '!*.min.js'],
					dest: 'js',
					ext: '.min.js'
				}]
			},
			controllers: {
				files: [{
					expand: true,
					cwd: 'controllers',
					src: ['*.js', '!*.min.js'],
					dest: 'controllers',
					ext: '.min.js'
				}]
			}
		},
		watch: {
			options: {
				livereload: true 
			},
			css: {
				files: ['css/*.css', '!css/*.min.css'],
				tasks: ['cssmin:css']
			},
			js: {
				files: ['js/*.js', '!js/*.min.js'],
				tasks: ['uglify:js']
			},
			controllers: {
				files: ['controllers/*.js', '!controllers/*.min.js'],
				tasks: ['uglify:controllers']
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