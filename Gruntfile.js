module.exports = function(grunt) {
  'use strict';

	// Load the plugin that clean files and directories.
	grunt.loadNpmTasks('grunt-contrib-clean');
	// Load the plugin that copy files and directories.
	grunt.loadNpmTasks('grunt-contrib-copy');
	// Load the plugin that minify and concatenate ".js" files.
	grunt.loadNpmTasks('grunt-contrib-uglify');
  // Run shell commands
  grunt.loadNpmTasks('grunt-shell');
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
      },
      site: {
        files: [{
          expand: true,
          dot: true,
          dest: 'docs/_site',
          src: ['dist/*.js']
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

    /* build jekyll */
    shell: {
      jekyllBuild: {
        command: 'jekyll build --source docs --destination docs/_site'
      }
    },

    /* commit on gh-pages github */
    'gh-pages': {
      options: {
        base: 'docs/_site/',
        message: 'auto-generated commit'
      },
      src: ['**/*']
    }

	});

	// tasks
  grunt.registerTask('build', [
      'clean',
      'copy:dist',
      'uglify',
      'shell',
      'copy:site',
      'gh-pages'
  ]);

  grunt.registerTask('deploy', [
      'build'
  ]);

  grunt.registerTask('default', [
      'build'
  ]);
};
