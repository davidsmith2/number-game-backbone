define([
    'jquery',
    'underscore',
    'backbone',
    'linkedIn',
    'views/masters/dialog',
    'text!templates/login.html'
],

function ($, _, Backbone, IN, DialogView, template) {

    var LoginView = DialogView.extend({

        id: 'login',
        template: _.template($(template).html()),

        events: {
            'click a[href=#sign-in]': 'signIn'
        },

        initialize: function () {},

        render: function () {
            this.$el.empty().append(this.template);
            return this;
        },

        signIn: function (e) {
            IN.User.authorize();
            e.preventDefault();
        }

    });

    return LoginView;

});