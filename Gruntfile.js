module.exports = function(grunt) {
  'use strict';

	// Load the plugin that clean files and directories.
	grunt.loadNpmTasks('grunt-contrib-clean');
  // Load the plugin that concatenate files.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Turn ES6 code into vanilla ES5 with no runtime required using 6to5
  require("load-grunt-tasks")(grunt);
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
    clean: ['<%= properties.dist %>', '<%= properties.temp %>'],

    /* concat files */
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      basic_and_extras: {
        files: {
           "<%= properties.dist %>/<%= pkg.name %>.js" : ['<%= pkg.name %>.js'],
           "<%= properties.temp %>/<%= pkg.name %>.es6.js" : ['<%= pkg.name %>.es6.js'],
        },
      },
    },

    /* Turn ES6 code into vanilla ES5 with no runtime required using 6to5 */
    '6to5': {
        options: {
            sourceMap: false
        },
        dist: {
            files: {
                '<%= properties.temp %>/<%= pkg.name %>.es5.js' : '<%= properties.temp %>/<%= pkg.name %>.es6.js'
            }
        }
    },

    /* put files not handled in other tasks here */
    copy: {
      '6to5': {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= properties.temp %>',
          src: '<%= pkg.name %>.es5.js',
          dest: '<%= properties.dist %>/',
          rename: function(dest, src) {
            return dest + src.replace("es5", "3.0.0");
          }
        }]
      },
      site: {
        files: [{
          expand: true,
          dot: true,
          src: ['<%= properties.dist %>/*.js'],
          dest: 'docs/_site'
        }]
      },
      test: {
        files: [{
          expand: true,
          dot: true,
          src: ['<%= properties.dist %>/*.js'],
          dest: 'test'
        }]
      }
    },

    /* js file minification */
    uglify: {
      options: {
        preserveComments: false
      },
      build: {
        files: {
          '<%= properties.dist %>/<%= pkg.name %>.min.js': ['<%= properties.dist %>/<%= pkg.name %>.js'],
          '<%= properties.dist %>/<%= pkg.name %>.3.0.0.min.js': ['<%= properties.dist %>/<%= pkg.name %>.3.0.0.js'],
        }
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
    },

    /* update bower json */
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: ['pkg'],
        commit: true,
        commitFiles: ['-a'], // all Files
        push: true,
        pushTo: 'origin'
      }
    }

	});

	// tasks
  grunt.registerTask('_site', [
    'clean',
    'concat',
    '6to5',
    'copy:6to5',
    'uglify',
    'copy:test',
    'shell',
    'copy:site'
  ]);

  grunt.registerTask('build', [
    'clean',
    'concat',
    '6to5',
    'copy:6to5',
    'uglify',
    'copy:test'
  ]);

  grunt.registerTask('deploy', [
    'clean',
    'concat',
    '6to5',
    'copy:6to5',
    'uglify',
    'copy:test',
    'shell',
    'copy:site',
    'gh-pages',
    'bump'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
