module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass:{
			dist:{
				files:{
					'public/assets/css/style.css': 'public/assets/sass/style.scss'
				}
			}
		},
		watch:{
			css:{
				files:'public/assets/sass/*.scss',
				tasks:['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('heroku', []);
	grunt.registerTask('default',['watch']);
};