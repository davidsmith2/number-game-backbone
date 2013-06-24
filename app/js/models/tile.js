define([
    'backbone'
],

function (Backbone) {
    
    var Tile = Backbone.Model.extend({

        defaults: {
            number: 0
        }
    });

    return Tile;

});