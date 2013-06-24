define([
    'jquery',
    'underscore',
    'backbone',
    'views/masters/dialog',
    'text!templates/profile.html'
],

function ($, _, Backbone, DialogView, template) {

    var ProfileView = DialogView.extend({

        id: 'profile',
        template: _.template($(template).html()),

        events: {
            'blur input[type=text]'                 :   'save',
            'click a[href=#splash]'                 :   'confirm'
        },

        initialize: function (player) {
            this.player = player;
        },

        render: function () {
            this.$el.empty().append(this.template(this.player.toJSON()));
            return this;
        },

        save: function (e) {
            var $el = $(e.target);

            if ($el.val()) {
                this.player.set($el.attr('id'), $el.val());
                this.player.save();
            }
        },

        confirm: function (e) {
            nu2.router.showSplash();
            e.preventDefault();
        }

    });

    return ProfileView;
    
});