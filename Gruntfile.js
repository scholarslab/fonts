module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'build/fonts',
        destCss: 'build/css',
        options: {
          stylesheet: 'scss',
          relativeFontPath: 'build/fonts'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);
};
