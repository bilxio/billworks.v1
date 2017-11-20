module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: ['build/']
    },

    concat: {
      distCss: {
        src: [
          'assets/css/foundation.css',
          'assets/css/font-awesome.min.css'
        ],
        dest: 'build/css/vendor.css'
      },
      distJs: {
        src: [
          'node_modules/jquery/dist/jquery.min.js',
          'assets/js/foundation.min.js',
          'assets/js/vendor/custom.modernizr.js',
          'assets/js/vendor/juicer-min-0.6.5.js'
        ],
        dest: 'build/js/vendor.js'
      }
    },

    copy: {
      assets: {
        files: [{
          expand: true,
          cwd: 'assets/',
          src: ['**'],
          dest: 'build/',
          filter: 'isFile'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load installed tasks
  // grunt.file.glob
  //   .sync('./node_modules/grunt-*/tasks')
  //   .forEach(grunt.loadTasks);

  grunt.registerTask('build', ['clean', 'concat', 'copy']);
  grunt.registerTask('default', 'build');
}
