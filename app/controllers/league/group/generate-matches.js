import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		generateMatches: function() {
			if(this.model.group.get('matches').length > 0) {
				console.log('Finns redan genererade matcher, ta bort dem och kör om');
				return;
			}

			console.log('Genererar matcher');

			var teams = this.model.teams;
			var group = this.model.group;

	 		var newMatches = [];

			for(var i = 0; i < teams.length; i++) {
				var home = teams.objectAt(i);

				for(var j = i+1; j < teams.length; j++) {
					var away = teams.objectAt(j);

					if(home !== away) {
						var newMatch = this.store.createRecord('match');
	 		
						newMatch.set('hometeam', home.get('name'));
						newMatch.set('awayteam', away.get('name'));
						newMatch.save();

						newMatches.push(newMatch);
					}
				}
			}

			group.set('matches', newMatches);
			group.save();



	 	// 	this.store.findRecord('group', this.model.record.id).then(function(group) {
			// 	group.get('teams').addObject(newTeam);

		 // 		newTeam.save().then(function () {
			// 		group.save();
			// 	});
	 	// 	});
			
			this.transitionToRoute('league.group');
		}
	}
});
