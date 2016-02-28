'use strict';
module.exports = function(grunt) {

  // configure grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./js/src/**/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
    },
    browserify: {
      dist: {
        files: {
          './js/main.js': ['./js/src/**/*.js']
        },
        options: {
          transform: [["babelify", {presets: ["es2015", "react"]}]]
        }
      }
    }
  });

  // Load plug-ins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // define tasks
  grunt.registerTask('default', ['browserify', 'watch']);
};
