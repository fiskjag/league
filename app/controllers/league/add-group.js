import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createGroup: function() {
	 		var newGroup = this.store.createRecord('group', {
	 			name: this.get('name')
	 		});
			
			var league = this.model.league;
	 		
			league.get('groups').addObject(newGroup);

		 	newGroup.save().then(function () {
				league.save();
			});
			
			this.transitionToRoute('league');
		}
	}
});
