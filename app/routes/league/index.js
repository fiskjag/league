import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
      		league: this.modelFor('league'),
      		groups: this.modelFor('league').get('groups'),
      		teams: this.store.findAll('team'),
      		players: this.store.findAll('player'),
    	});
	},

  	setupController(controller, model) {
	    this._super(...arguments);
	    Ember.set(controller, 'league', model.league);
	    Ember.set(controller, 'groups', model.groups);
	    Ember.set(controller, 'teams', model.teams);
	    Ember.set(controller, 'players', model.players);
  	}
});