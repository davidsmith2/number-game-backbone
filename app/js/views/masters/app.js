define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'models/game'
],

function ($, _, Backbone, config, Game) {

    var AppView = Backbone.View.extend({

        showView: function (view, selector) {
            var self = this;

            if (this.currentView) {
                this.currentView.close();
            }

            this.currentView = view;
            this.currentView.render();
            $(selector).html(this.currentView.el);

            if ($(this.currentView.el).hasClass('dialog')) {
                require(['jquery', 'jquery.tools'], function ($) {
                    $(self.currentView.el).overlay(config.overlays);
                });
            }

            return view;
        },

        close: function () {
            this.$el.empty();
            this.unbind();
        },

        // factory method for instantiating new games
        getNewGame: function (guessesAllowed) {
            var game = new Game();
            game.set('guessesAllowed', guessesAllowed);
            return game;
        }

    });

    return AppView;

});