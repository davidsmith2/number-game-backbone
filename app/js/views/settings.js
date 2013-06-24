define([
    'jquery',
    'underscore',
    'backbone',
    'views/masters/dialog',
    'views/settings/skill-levels',
    'text!templates/settings.html'
],

function ($, _, Backbone, DialogView, SkillLevelsView, template) {

    var guessesAllowed, SettingsView;

    SettingsView = DialogView.extend({

        id: 'settings',
        template: _.template($(template).html()),

        events: {
            'change input[name=guesses-allowed]':   'getGuessesAllowed',
            'click a[href=#splash].button-green':   'confirmSettings',
            'click a[href=#splash].button-red':     'cancelSettings'
        },

        initialize: function (game, skillLevels) {
            this.game = game;
            this.skillLevels = skillLevels;
        },

        render: function () {
            this.$el.empty().append(this.template);
            this.$('#skill-levels-container').append(new SkillLevelsView(this.game, this.skillLevels).el);
            return this;
        },

        getGuessesAllowed: function (e) {
            guessesAllowed = parseInt($(e.target).val(), 10);
        },

        confirmSettings: function (e) {
            var skillLevels = this.skillLevels;

            if (guessesAllowed) {

                // update game model
                this.game.set('guessesAllowed', guessesAllowed);

                // update skill levels collection
                skillLevels.each(function (skillLevel) {
                    if (skillLevel.get('guessesAllowed') !== guessesAllowed) {
                        skillLevel.set('selected', false);
                    } else {
                        skillLevel.set('selected', true);
                    }
                });

            }

            this.updateViews(e);
        },

        cancelSettings: function (e) {
            this.updateViews(e);
        },

        updateViews: function (e) {
            nu2.router.showSplash();
            e.preventDefault();

        }

    });

    return SettingsView;
    
});