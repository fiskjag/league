import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createLeague: function() {
			var newLeague = this.store.createRecord('league', {
				year: this.get('year')
			});
			newLeague.save();
		}
	}
});
