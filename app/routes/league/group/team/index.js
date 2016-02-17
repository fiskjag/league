import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
      		league: this.modelFor('league'),
      		group: this.modelFor('league.group'),
      		team: this.modelFor('league.group.team'),
      		players: this.modelFor('league.group.team').get('players')
    	});
	},

  	setupController(controller, model) {
	    this._super(...arguments);
	    Ember.set(controller, 'league', model.league);
	    Ember.set(controller, 'group', model.group);
	    Ember.set(controller, 'team', model.team);
	    Ember.set(controller, 'players', model.players);
  	}
});