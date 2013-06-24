define([
    'underscore',
    'backbone',
    'config'
],

function (_, Backbone, config) {

    var Game = Backbone.Model.extend((function () {

        return {

            defaults: {
                currentGuess: '-',
                guessAccuracy: '-',
                guesses: [],
                guessesAllowed: null,
                guessesMade: 0,
                guessesRemaining: null,
                playerId: null,
                result: null,
                secretNumber: null
            },

            initialize: function () {
                this.setGuessesRemaining();
                this.set('secretNumber', this.getRandomNumber(1, config.maxTiles));
                this.on('change:guessesAllowed', this.setGuessesRemaining, this);
                this.on('change:currentGuess', this.setGuesses, this);
            },

            getRandomNumber: function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },

            setGuessesRemaining: function () {
                this.set('guessesRemaining', this.get('guessesAllowed'));
            },

            setGuesses: function () {
                this.push('guesses', this.get('currentGuess'));
            },

            push: function (arg, val) {
                var arr = _.clone(this.get(arg));
                arr.push({'guess': val});
                this.set(arg, arr);
            },

            isWin: function () {
                return this.get('result') === config.strings.results.win;
            }

        };

    })());

    return Game;

});