define([
    'jquery',
    'underscore',
    'backbone',
    'views/masters/app',
    'text!templates/settings/skill-levels/skill-level.html'
],

function ($, _, Backbone, AppView, template) {

    var SkillLevelView = AppView.extend({

        tagName: 'label',
        template: _.template($(template).html()),

        initialize: function (model) {
            this.model = model;
            this.render();
        },

        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        }

    });

    return SkillLevelView;
    
});