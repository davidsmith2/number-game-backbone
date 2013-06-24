define([
    'backbone'
],

function (Backbone) {
    
    var SkillLevel = Backbone.Model.extend({

        defaults: {
            guessesAllowed: null,
            description: '',
            selected: false
        }

    });

    return SkillLevel;

});