module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // здесь будут настроенные нами таски
    watch : {
      haml : {
        files : '*.haml',
        tasks : 'haml'
      },
      coffee : {
        files : 'js/*.coffee',
        tasks : 'coffee'
      },
      sass : {
        files : 'stylesheets/sass/*.sass',
        tasks : 'sass'
      },
    },

    haml : {
      dist: {
        files: {
          'index.html': 'index.haml'
        }
      }
    },
    sass : {
      dist: {
        files: {
          'stylesheets/base.css': 'stylesheets/sass/base.sass',
          'stylesheets/project.css': 'stylesheets/sass/project.sass'
        }
      }
    },
    connect: {
      target: 'http://localhost:8000',
    },
    coffee : {
       compile: {
        files: {
          'js/main.js': ['main/*.coffee']
        }
      }
    }
  
});


  // здесь будут подключаться необходимые модули
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // а здесь - вызываться таски
  grunt.registerTask('default', ['sass', 'coffee', 'haml', 'connect', 'watch']);

};