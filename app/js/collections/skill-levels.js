define([
    'backbone',
    'models/skill-level'
],

function (Backbone, SkillLevel) {
    
    var SkillLevels = Backbone.Collection.extend({
        model: SkillLevel
    });

    return SkillLevels;

});