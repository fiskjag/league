import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createTeam: function() {
			console.log('createTeam');
	 		var newTeam = this.store.createRecord('team', {
	 			name: this.get('name')
	 		});
			
			var group = this.model.group;
	 		
			group.get('teams').addObject(newTeam);

		 	newTeam.save().then(function () {
				group.save();
			});
			
			this.transitionToRoute('league.group');
		}
	}
});
