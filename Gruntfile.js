/**
 * Created by dnduong on 12/26/2016.
 */

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-rewrite');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-bower-task');

    // var rewriteModule = require('http-rewrite-middleware');
    // var serveStatic = require('serve-static');
    // var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;
    grunt.initConfig({
        // Researching about / error
        // express: {
        //     options: {
        //         port: 9000
        //     },
        //     server: {
        //         hostname: 'localhost'
        //     },
        //     rules: [
        //         {
        //             from: 'localhost:6969\/abc',
        //             to: 'localhost:6969\/#login'
        //         },
        //     ]
        // },
        // configureRewriteRules: {
        //     options: {
        //         rulesProvider: 'express.rules'
        //     }
        // },
        //
        // connect: {
        //     // rules: {
        //     //     from: 'http:\/\/localhost:6969\/login',
        //     //     to: 'http:\/\/localhost:6969\/#login'
        //     // },
        //     // },
        //     options: {
        //         port: 6968,
        //         hostname: 'localhost'
        //     },
        //     rules: [
        //         {
        //             from: 'http:\/\/localhost:6969\/login',
        //             to: 'http:\/\/localhost:6969\/#login'
        //         }
        //     ],
        //     development: {
        //         options: {
        //             keepalive: true,
        //             middleware: function (connect, options) {
        //                 var middlewares = [];
        //
        //                 // RewriteRules support
        //                 middlewares.push(rewriteRulesSnippet);
        //
        //                 if (!Array.isArray(options.base)) {
        //                     options.base = [options.base];
        //                 }
        //
        //                 var directory = options.directory || options.base[options.base.length - 1];
        //                 options.base.forEach(function (base) {
        //                     // Serve static files.
        //                     middlewares.push(serveStatic(base));
        //                 });
        //
        //                 // Make directory browse-able.
        //                 // middlewares.push(connect.directory(directory));
        //
        //                 return middlewares;
        //             }
        //         }
        //     },
        bower: {
            install: {
                options: {
                    cleanBowerDir: false,
                    copy: false,
                }
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            js: {
                src: [
                    './app-content/js/somefoo.js'
                ],
                dest: './app-content/build/built.js'
            },

            css: {
                src: [
                    './app-content/css/app.css',
                    './app-content/css/bootstrap.min.css'
                ],
                dest: './app-content/build/built.css'
            }
        },

        watch: {
            scripts: {
                // files: ['./app-content/lib/build/built.js'],
                // tasks: ['jshint'],
                // options: {
                //     spawn: false,
                // },
            },
        },

        wiredep: {
            task: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.html',
                ],

                options: {
                    // See wiredep's configuration documentation for the options
                    // https://github.com/taptapship/wiredep#configuration
                    directory: './app-content/bower-components/'
                }
            }
        },

        connect:{
            dev: {
                options: {
                    port: 6969,
                    hostname: 'localhost',
                    // base:'/maplaweb',
                    // onCreateServer: function(server, connect, options) {
                    //     var io = require('socket.io').listen(server);
                    //     io.sockets.on('connection', function(socket) {
                    //         // do something with socket
                    //     });
                    // }
                    keepalive: true,

                }
            },

            test: {
                options: {
                    port: 9999,
                    hostname: 'localhost',
                    // base:'/maplaweb',
                    // onCreateServer: function(server, connect, options) {
                    //     var io = require('socket.io').listen(server);
                    //     io.sockets.on('connection', function(socket) {
                    //         // do something with socket
                    //     });
                    // }
                    keepalive: true,
                }
            }
        }
    });
    grunt.registerTask('run-dev', [
        'bower',
        'wiredep',
        'concat',
        'connect:dev'
    ]);
    grunt.registerTask('sv', [
        'configureRewriteRules',
        'connect:development'
    ]);
};
