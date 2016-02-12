import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
      		league: this.modelFor('league'),
      		group: this.modelFor('league.group'),
      		teams: this.modelFor('league.group').get('teams')
    	});
	},

  	setupController(controller, model) {
	    this._super(...arguments);
	    Ember.set(controller, 'league', model.league);
	    Ember.set(controller, 'group', model.group);
	    Ember.set(controller, 'teams', model.teams);
  	}
});