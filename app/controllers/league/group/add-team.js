import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createTeam: function() {
	 		var newTeam = this.store.createRecord('team', {
	 			name: this.get('name')
	 		});
			
	 		this.store.findRecord('group', this.model.record.id).then(function(group) {
				group.get('teams').addObject(newTeam);

		 		newTeam.save().then(function () {
					group.save();
				});
	 		});
			
			this.transitionToRoute('index');
		}
	}
});
