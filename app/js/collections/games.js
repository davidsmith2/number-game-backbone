define([
    'backbone',
    'models/game'
],

function (Backbone, Game) {
    
    var Games = Backbone.Collection.extend({
        model: Game,
        url: '/api/games'
    });

    return Games;

});