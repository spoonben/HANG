module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['templates/**/*', 'assets/css/*'],
      tasks: ['build']
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
          layout: 'templates/layouts/default.hbs',
          partials: 'templates/partials/**/*.hbs',
          assets: "build/assets"
        }
      }
    },
    copy: {
      build: {
        files: [
          {expand: true, src: 'assets/css/*.css', dest: 'build'},
          {expand: true, src: 'assets/js/*.js', dest: 'build'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('assemble' )
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('assemble' );
  grunt.loadNpmTasks('grunt-newer' );
  
  grunt.registerTask('default', ['newer:assemble' ]);
  
  grunt.registerTask('build', ['assemble', 'copy:build']);

};
