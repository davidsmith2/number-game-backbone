define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'views/masters/dialog',
    'views/top-scores/top-score',
    'text!templates/top-scores.html'
],

function ($, _, Backbone, config, DialogView, TopScoreView, template) {

    var TopScoresView = DialogView.extend({

        id: 'top-scores',
        template: _.template($(template).html()),

        events: {
            'click a[href=#result]': 'exit',
        },

        initialize: function (games, players) {
            this.games = games;
            this.players = players;
        },

        render: function () {
            var html = '',
                count = 1,
                self = this,
                data;

            this.$el.append(this.template());
            this.games.each(function (game, index) {
                var playerId,
                    player;

                if (count <= config.maxTopScores && game.isWin()) {
                    playerId = game.get('playerId');
                    player = self.players.get(playerId);
                    data = {
                        rank: count,
                        firstName: player.get('firstName'),
                        lastName: player.get('lastName'),
                        guessesAllowed: game.get('guessesAllowed'),
                        guessesMade: game.get('guessesMade')
                    };
                    self.renderGame(data);
                    count++;
                }
            });
            return this;
        },

        renderGame: function (data) {
            this.$('tbody').append(new TopScoreView(data).el);
        },

        exit: function (e) {
            nu2.router.showResult();
            e.preventDefault();
        }

    });

    return TopScoresView;
    
});