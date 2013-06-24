define([
    'backbone',
    'jquery',
    'underscore',
    'text!templates/game/tiles/tile.html',
    'views/masters/app'
],

function (Backbone, $, _, template, AppView) {

    var TileView = AppView.extend({

        className: 'tile',
        template: _.template($(template).html()),

        events: {},

        initialize: function (tile) {
            this.tile = tile;
            this.render();
        },

        render: function () {
            this.$el.append(this.template(this.tile.toJSON()));
        }

    });

    return TileView;
    
});