define([
    'jquery',
    'underscore',
    'backbone',
    'views/masters/app',
	'jquery.tools'
],

function ($, _, Backbone, AppView) {

    var DialogView = AppView.extend({

        className: 'dialog',

        initialize: function () {},

        render: function () {}

    });

    return DialogView;
    
});