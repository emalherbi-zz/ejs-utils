module.exports = function(grunt) {
  'use strict';

	// Load the plugin that clean files and directories.
	grunt.loadNpmTasks('grunt-contrib-clean');
	// Load the plugin that copy files and directories.
	grunt.loadNpmTasks('grunt-contrib-copy');
	// Load the plugin that minify and concatenate ".js" files.
	grunt.loadNpmTasks('grunt-contrib-uglify');
  // Publish to GitHub Pages with Grunt
  grunt.loadNpmTasks('grunt-gh-pages');
	// Automatic notifications when tasks fail.
	grunt.loadNpmTasks('grunt-notify');

  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),

    /* clean directories */
    clean: ['dist'],

    /* put files not handled in other tasks here */
    copy: {
      dist: {
        files: [{
          expand: true,
            dot: true,
            dest: 'dist',
            src: ['ejs-utils.js']
          }]
        }
    },

    /* js file minification */
    uglify: {
      options: {
        preserveComments: false
      },
			build: {
				src: 'dist/<%= pkg.name %>.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
    },

    'gh-pages': {
      options: {
        base: 'docs/_site/'
      },
      src: ['**']
    },

	});

	// tasks
  grunt.registerTask('site', [
      'gh-pages'
  ]);

  grunt.registerTask('build', [
      'clean',
      'copy',
      'uglify',
  ]);

  grunt.registerTask('deploy', [
      'build'
  ]);

  grunt.registerTask('default', [
      'build'
  ]);
};
