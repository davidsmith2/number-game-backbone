define([
    'backbone',
    'models/player'
],

function (Backbone, Player) {
    
    var Players = Backbone.Collection.extend({
        model: Player,
        url: '/api/players'
    });

    return Players;

});