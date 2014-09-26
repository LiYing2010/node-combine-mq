/*
* combine-mq
* https://github.com/buildingblocks/node-combine-mq
*
* Copyright (c) 2014 Building Blocks
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'nyan'
        },
        src: [
        'test/**/*.js'
        ]
      }
    },
    jshint: {
      options: {
        'curly': true,
        'eqeqeq': true,
        'immed': true,
        'latedef': true,
        'newcap': true,
        'noarg': true,
        'sub': true,
        'undef': true,
        'unused': true,
        'boss': true,
        'eqnull': true,
        'node': true,
        globals: {
          'describe': true,
          'it': true
        },
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: [
        'lib/**/*.js'
        ]
      },
      test: {
        src: [
        'test/**/*.js'
        ]
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: [
          'jshint:gruntfile'
        ]
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: [
          'jshint:lib',
          'mochaTest',
        ]
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: [
          'jshint:test',
          'mochaTest',
        ]
        }
      }
    });

  // Default task
  grunt.registerTask('default', [
    'dev'
    ]);

  // Dev task
  grunt.registerTask('dev', [
    'jshint',
    'mochaTest',
    'watch'
    ]);

  // Test task
  grunt.registerTask('test', [
    'jshint',
    'mochaTest'
    ]);
};
