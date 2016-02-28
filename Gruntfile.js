'use strict';
module.exports = function(grunt) {

  // configure grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./js/src/**/*.js', './js/src/**/*.jsx'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
    },
    browserify: {
      dist: {
        options: {
          transform: [["babelify", {presets: ["es2015", "react"]}]]
        },
        files: {
          './js/main.js': ['./js/src/main.js']
        }
      }
    }
  });

  // Load plug-ins
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // define tasks
  grunt.registerTask('default', ['browserify', 'watch']);
};
