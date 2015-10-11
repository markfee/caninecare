module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                          // Target
                files: [{                     // Dictionary of files
                    expand: true,
                    cwd: 'assets/sass',
                    src: ['*.scss'],
                    dest: 'assets/css/',
                    ext: ".css"
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);

};