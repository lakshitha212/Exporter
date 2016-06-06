/**
 * Created by ENCYTE-PC on 6/5/2016.
 */
module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint']);
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        wiredep: {
            target: {
                src: 'index.html' // point to your HTML file.
            }
        },
        watch: {
            files: ['bower_components/*'],
            tasks: ['wiredep']
        }
    });
    grunt.registerTask('default', ['wiredep']);
};