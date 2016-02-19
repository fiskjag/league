import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		var scope = this;

		var playersPromise = this.store.findAll('player').then(function(player) {
			var group = scope.modelFor('league.group');
			return player.filterBy('team.group.id', group.get('id'));
		});

		return Ember.RSVP.hash({
      		league: this.modelFor('league'),
      		group: this.modelFor('league.group'),
      		teams: this.modelFor('league.group').get('teams'),
      		matches: this.modelFor('league.group').get('matches'),
      		players: playersPromise
    	});
	},

  	setupController(controller, model) {
	    this._super(...arguments);
	    Ember.set(controller, 'league', model.league);
	    Ember.set(controller, 'group', model.group);
	    Ember.set(controller, 'teams', model.teams);
	    Ember.set(controller, 'matches', model.matches);
	    Ember.set(controller, 'players', model.players);
  	}
});