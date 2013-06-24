define([
    'views/game',
    'views/profile',
    'views/result',
    'views/settings',
    'views/splash',
    'views/top-scores'
],

function (GameView, ProfileView, ResultView, SettingsView, SplashView, TopScoresView) {

    var Router = Backbone.Router.extend({

        events: {},

        initialize: function (app) {
            this.collections = app.collections;
            this.models = app.models;
        },

        showGame: function () {
            var view = new GameView(this.models.game, this.models.player, this.collections.games);

            view.showView(view, '#main');
        },

        showSplash: function () {
            var view = new SplashView(this.models.game);

            view.showView(view, '#dialog');
        },

        showSettings: function () {
            var view = new SettingsView(this.models.game, this.collections.skillLevels);

            view.showView(view, '#dialog');
        },

        showProfile: function () {
            var view = new ProfileView(this.models.player);

            view.showView(view, '#dialog');
        },

        showResult: function () {
            var view = new ResultView(this.models.game);

            view.showView(view, '#dialog');
        },

        showTopScores: function () {
            var view = new TopScoresView(this.collections.games, this.collections.players);

            view.showView(view, '#dialog');
        }

    });

    return Router;

});