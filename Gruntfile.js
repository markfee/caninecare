module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                          // Target
                files: [{                     // Dictionary of files
                    'assets/sass/main.css': 'assets/sass/main.scss'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);

};