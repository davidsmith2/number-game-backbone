define([
    'underscore',
    'backbone'
],

function (_, Backbone) {

    var Player = Backbone.Model.extend({

        defaults: {
            inid: '',
            firstName: 'Anonymous',
            lastName: 'User'
        },

        parse: function (response) {
            response.id = response._id;
            return response;
        }

    });

    return Player;

});