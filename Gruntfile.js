module.exports = function(grunt) {
  'use strict';

	// Load the plugin that clean files and directories.
	grunt.loadNpmTasks('grunt-contrib-clean');
  // Load the plugin that concatenate files.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Load the plugin that copy files and directories.
  grunt.loadNpmTasks('grunt-contrib-copy');
	// Load the plugin that minify and concatenate ".js" files.
	grunt.loadNpmTasks('grunt-contrib-uglify');
  // Run shell commands
  grunt.loadNpmTasks('grunt-shell');
  // Publish to GitHub Pages with Grunt
  grunt.loadNpmTasks('grunt-gh-pages');
  // Bump package version, create tag, commit, push ...
  grunt.loadNpmTasks('grunt-bump');
	// Automatic notifications when tasks fail.
	grunt.loadNpmTasks('grunt-notify');

  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
    properties: grunt.file.readJSON('properties.json'),

    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2010-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',

    /* clean directories */
    clean: ['<%= properties.dist %>'],

    /* concat files */
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      basic_and_extras: {
        files: {
           "<%= properties.dist %>/<%= pkg.name %>.js" : ['<%= pkg.name %>.js'],
        },
      },
    },

    /* js file minification */
    uglify: {
      options: {
        preserveComments: false
      },
			build: {
				src: '<%= properties.dist %>/<%= pkg.name %>.js',
				dest: '<%= properties.dist %>/<%= pkg.name %>.min.js'
			}
    },

    /* build jekyll */
    shell: {
      jekyllBuild: {
        command: 'jekyll build --source docs --destination docs/_site'
      }
    },

    /* put files not handled in other tasks here */
    copy: {
      site: {
        files: [{
          expand: true,
          dot: true,
          src: ['dist/*.js'],
          dest: 'docs/_site'
        }]
      }
    },

    /* commit on gh-pages github */
    'gh-pages': {
      options: {
        base: 'docs/_site/',
        message: 'auto-generated commit'
      },
      src: ['**/*']
    },

    /* update bower json */
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: ['pkg'],
        commitFiles: ['-a'],
        push: true,
        pushTo: 'origin'
      }
    }

	});

	// tasks
  grunt.registerTask('build', [
      'clean',
      'concat',
      'uglify',
      'shell',
      'copy:site',
      'gh-pages',
      'bump'
  ]);

  grunt.registerTask('deploy', [
      'build'
  ]);

  grunt.registerTask('default', [
      'build'
  ]);
};
