module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
              port: 4200,
              hostname: 'localhost',
              base: 'app'
            },
            app: {},
            test: {}
        },
        sass: {
            dist: {
                files: {
                    'app/css/app.css': 'app/sass/app.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'app/sass/app.scss',
                tasks: ['sass']
            }
        },
        copy: {
            deployImages: {
              cwd: 'app/img',
              src: '**',
              dest: 'docs/img/',
              expand: true
            },
            deployStyles: {
              cwd: 'app/css',
              src: '**/*.css',
              dest: 'docs/css/',
              expand: true
            },
            deployHtml: {
              cwd: 'app',
              src: 'index.html',
              dest: 'docs/',
              expand: true
            },
            deployScripts: {
              cwd: '.tmp/scripts',
              src: 'main.js',
              dest: 'docs/js/',
              expand: true
            }
        },
        requirejs: {
          compile: {
            options: {
              baseUrl: "app/js",
              mainConfigFile: "app/js/require.config.js",
              include: "require.config",
              name: "lib/almond",
              out: ".tmp/scripts/main.js"
            }
          }
        },
        fileblocks: {
          options: {
            templates: {
              'requirejs': '<script data-main="js/require.config" src="${file}"></script>'
            },
            removeFiles : true
          },
          prod: {
            src: 'docs/index.html',
            blocks: {
              'config': { src: 'js/main.js', cwd: 'docs' }
            }
          },
          develop: {
            src: 'app/index.html',
            blocks: {
              'config': { src: 'js/lib/require.min.js', cwd: 'app' }
            }
          },
        },
        clean: {
          dist: ['.tmp', 'docs']
        },
        jasmine: {
          all:{
            src : [],
            options: {
              specs: [
                'test/*.test.js'
              ],
              vendor: [
                'app/js/lib/require.min.js'
              ],
              template: require('@radum/grunt-template-jasmine-requirejs'),
              templateOptions: {
                requireConfigFile: ['app/js/require.config.js', 'test/require.config.js']
              }
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-file-blocks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('build', [
      'sass',
      'requirejs'
    ]);
    
    grunt.registerTask('default', ['build', 'fileblocks:develop', 'connect:app', 'watch']);
    grunt.registerTask('release', ['clean:dist', 'build', 'copy', 'fileblocks:prod']);
    grunt.registerTask('test', ['jasmine']);

};