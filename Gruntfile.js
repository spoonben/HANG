module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    assemble: {
      options: {
        assets: "assets/",
        data:   "config.json",
        ext: '.html',
        flatten: true,
        helpers: [
          "handlebars-helpers"
        ],
        contextual: {
          dest: 'build/'
        }
      },
      build: {
        src: "templates/*.hbs",
        dest: "build/",
        options: {
          assets: "build/assets"
        }
      }
    },
    copy: {
      build: {
        files: [
          {expand: true, src: 'assets/**/*.png', dest: 'build'},
          {expand: true, src: 'assets/js/*.js', dest: 'build'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('assemble' )
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('assemble' );
  grunt.loadNpmTasks('grunt-newer' );
  
  grunt.registerTask('default', ['newer:assemble' ]);
  grunt.registerTask('build', ['assemble']);

};
