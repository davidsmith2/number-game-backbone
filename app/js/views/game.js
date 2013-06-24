define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'views/masters/app',
    'views/game/scoreboard',
    'views/game/tiles',
    'text!templates/game.html'
],

function ($, _, Backbone, config, AppView, ScoreboardView, TilesView, template) {

    var GameView = AppView.extend({

        id: 'game',
        template: _.template($(template).html()),

        events: {
            'click a[href=#splash]': 'quitGame'
        },

        initialize: function (game, player, games) {
            this.game = game;
            this.player = player;
            this.games = games;
            this.game.on('change:result', this.handleResult, this);
        },

        render: function () {
            var scoreboardView = new ScoreboardView(this.game),
                tilesView = new TilesView(this.game);

            this.$el.empty().append(this.template());
            this.$('#scoreboard-container').append(scoreboardView.el);
            this.$('#tiles-container').append(tilesView.el);
            return this;
        },

        quitGame: function (e) {
            this.game.set('result', config.strings.results.quit);
            nu2.models.game = this.getNewGame(this.game.get('guessesAllowed'));
            nu2.router.showGame();
            nu2.router.showSplash();
            e.preventDefault();
        },

        handleResult: function () {
            this.game.set('playerId', this.player.get('id'));
            // this.games.create(this.game);
            nu2.router.showResult();
        }

    });

    return GameView;
    
});