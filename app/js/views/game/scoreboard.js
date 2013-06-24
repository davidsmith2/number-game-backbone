define([
    'jquery',
    'underscore',
    'backbone',
    'views/masters/app',
    'text!templates/game/scoreboard.html'
],

function ($, _, Backbone, AppView, template) {

    var ScoreboardView = AppView.extend({

        id: 'scoreboard',
        template: _.template($(template).html()),

        events: {},

        initialize: function (game) {
            this.game = game;
            this.game.on('change:currentGuess', this.render, this);
            this.game.on('change:guessesAllowed', this.render, this);
            this.render();
        },

        render: function () {
            this.$el.empty().append(this.template(this.game.toJSON()));
            return this;
        }

    });

    return ScoreboardView;
    
});