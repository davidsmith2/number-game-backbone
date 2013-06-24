define([
    'jquery',
    'underscore',
    'backbone',
    'views/masters/app',
    'views/settings/skill-levels/skill-level',
    'text!templates/settings/skill-levels.html'
],

function ($, _, Backbone, AppView, SkillLevelView, template) {

    var SkillLevelsView = AppView.extend({

        id: 'skill-levels',

        events: {},

        initialize: function (game, skillLevels) {
            this.game = game;
            this.skillLevels = skillLevels;
            this.render();
        },

        render: function () {
            var self = this;

            this.skillLevels.each(function (item) {
                self.renderItem(item);
            });
            return this;
        },

        renderItem: function (item) {
            this.$el.append(new SkillLevelView(item).el);
        }

    });

    return SkillLevelsView;
    
});