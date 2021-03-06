import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createPlayer: function() {
			if(this.get('firstname') === '' || this.get('surname') === '') {
				return;
			}

	 		var newPlayer = this.store.createRecord('player', {
	 			firstname: this.get('firstname'),
	 			surname: this.get('surname')
	 		});
			
			var team = this.model.team;

			team.get('players').addObject(newPlayer);

		 	newPlayer.save().then(function () {
				team.save();
			});
		}
	}
});
