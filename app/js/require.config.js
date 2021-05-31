requirejs.config({
    baseUrl: 'js',
    paths: {
        'backbone':             'lib/backbone-min',
        'jquery':               'lib/jquery-1.7.2.min',
        'jquery.tools':         'lib/jquery.tools.min',
        'text':                 'lib/text',
        'underscore':           'lib/lodash.compat'
    },
	shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'jquery.tools': {
            deps: ['jquery']
        },
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
	}
});

require(['main']);