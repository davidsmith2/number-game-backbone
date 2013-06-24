define([
    'jquery',
    'underscore',
    'backbone',
    'views/masters/dialog',
    'text!templates/splash.html'
],

function ($, _, Backbone, DialogView, template) {

    var SplashView = DialogView.extend({

        id: 'splash',
        template: _.template($(template).html()),

        events: {
            'click a[href=#play]':      'playGame',
            'click a[href=#settings]':  'changeSettings',
            'click a[href=#profile]':   'updateProfile',
        },

        initialize: function (game) {
            this.game = game;
        },

        render: function () {
            this.$el.empty().append(this.template);
            return this;
        },

        playGame: function (e) {
            this.$el.data('overlay').close();
            e.preventDefault();
        },

        changeSettings: function (e) {
            nu2.router.showSettings();
            e.preventDefault();
        },

        updateProfile: function (e) {
            nu2.router.showProfile();
            e.preventDefault();
        }

    });

    return SplashView;
    
});