import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
      		league: this.modelFor('league')
    	});
	},

  	setupController(controller, model) {
	    this._super(...arguments);
	    Ember.set(controller, 'league', model.league);
  	}
});
