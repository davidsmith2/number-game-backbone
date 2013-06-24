define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'models/tile',
    'views/masters/app',
    'views/game/tiles/tile',
    'text!templates/game/tiles.html'
],

function ($, _, Backbone, config, Tile, AppView, TileView, template) {

    var secretNumber, TilesView;

    TilesView = AppView.extend({

        id: 'tiles',

        events: {
            'click a.tile': 'handleGuess',
        },

        initialize: function (game) {
            this.game = game;
            secretNumber = this.game.get('secretNumber');
            this.render();
        },

        render: function () {
            for (var i = 1; i <= config.maxTiles; i++) {
                this.renderItem(i);
            }
            return this;
        },

        renderItem: function (number) {
            var item = new TileView(new Tile({number: number}));
            this.$el.append(item.el);
        },

        handleGuess: function (e) {
            var data = {},
                $tileLink,
                $tileContainer;

            $tileLink = $(e.target);
            $tileContainer = $tileLink.parent();

            // start to compile property values for the current game instance
            // and we'll do one big set operation at the end of this method
            // important that the set operation happens at the end of the method to keep everything in sync
            data.currentGuess = parseInt($tileLink.text(), 10);
            data.guessesMade = this.game.get('guessesMade') + 1;
            data.guessesRemaining = this.game.get('guessesRemaining') - 1;

            if (data.currentGuess !== secretNumber) {
                $tileContainer.addClass('visited');
                if (data.currentGuess < secretNumber) {
                    data.guessAccuracy = config.strings.currentGuess.low;
                } else {
                    data.guessAccuracy = config.strings.currentGuess.high;
                }
                if (data.guessesRemaining === 0) {
                    data.result = config.strings.results.lose;
                    data.secretNumber = secretNumber;
                }
            } else {
                data.guessAccuracy = config.strings.currentGuess.equal;
                $tileContainer.addClass(data.guessAccuracy.toLowerCase());
                data.result = config.strings.results.win;
                data.secretNumber = secretNumber;
            }

            this.game.set(data);

            e.preventDefault();
        }

    });

    return TilesView;
    
});