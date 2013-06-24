define([
    'jquery',
    'underscore',
    'backbone',
    'views/masters/dialog',
    'text!templates/result.html'
],

function ($, _, Backbone, DialogView, template) {

    var ResultView = DialogView.extend({

        id: 'result',
        template: _.template($(template).html()),

        events: {
            'click a[href=#play]':          'replayGame',
            'click a[href=#top-scores]':    'viewTopScores',
            'click a[href=#splash]':        'quitGame'
        },

        initialize: function (game) {
            this.game = game;
        },

        render: function () {
            this.$el.empty().addClass(this.game.get('result')).append(this.template(this.game.toJSON()));
            return this;
        },

        replayGame: function (e) {
            this.$el.data('overlay').close();
            this.setNewGame();
            nu2.router.showGame();
            e.preventDefault();
        },

        viewTopScores: function (e) {
            nu2.router.showTopScores();
            e.preventDefault();
        },

        quitGame: function (e) {
            this.setNewGame();
            nu2.router.showGame();
            nu2.router.showSplash();
            e.preventDefault();
        },

        setNewGame: function () {
            nu2.models.game = this.getNewGame(this.game.get('guessesAllowed'));
        }

    });

    return ResultView;
    
});