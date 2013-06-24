define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'views/masters/app',
    'text!templates/top-scores/top-score.html'
],

function ($, _, Backbone, config, AppView, template) {

    var TopScoreView = AppView.extend({

        className: 'top-score',
        tagName: 'tr',
        template: _.template($(template).html()),

        events: {},

        initialize: function (gameData) {
            this.render(gameData);
        },

        render: function (gameData) {
            this.$el.append(this.template(gameData));
            return this;
        }

    });

    return TopScoreView;
    
});