define([
	'jquery',
	'underscore',
	'backbone',
	'config',
	'collections/games',
	'collections/players',
	'collections/skill-levels',
    'models/game',
    'models/player',
	'router',
	'views/game',
	'views/splash'
],

function ($, _, Backbone, config, Games, Players, SkillLevels, Game, Player, Router, GameView, SplashView) {

	var App = function () {

		this.collections.skillLevels = new SkillLevels();
		this.collections.skillLevels.add(config.skillLevels);

		this.collections.games = new Games();
		this.collections.games.comparator = function (game) {
			return game.get('guesses').length;
		};

		this.collections.players = new Players();

		this.models.game = new Game();
		this.models.game.set({
			guessesAllowed: this.collections.skillLevels.findWhere({selected: true}).get('guessesAllowed')
		});

		this.models.player = new Player();

		this.router = new Router(this);

	};

	App.prototype = {

		collections: {},
		models: {},
		router: {},
		views: {},

		start: function () {
			// this.collections.games.fetch({reset: true});
			this.router.showGame();
			this.router.showSplash();
		}

	};

	return App;

});