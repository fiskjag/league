import Ember from 'ember';

export default Ember.Controller.extend({
	teamSortProps: ['points:desc', 'goaldiff:desc', 'goalsscored:desc'],
	sortedTeams: Ember.computed.sort('model.teams', 'teamSortProps'),

	matchSortProps: ['date'], 
	sortedMatches: Ember.computed.sort('model.matches', 'matchSortProps'),

	actions: {
	    updateDate(updatedMatch) {
	      	var group = this.model.group;
	      
		    this.store.findRecord('match', updatedMatch.id).then(function(match) {
			    match.set('date', new Date(updatedMatch.value));
			    match.save().then(function () {
			    	group.save();
			    });
		    });
	    }, 
	    updateHomeGoals(updatedMatch) {
	      	var group = this.model.group;

		    this.store.findRecord('match', updatedMatch.id).then(function(match) {
			    if(updatedMatch.value === '') {
		      		match.set('homegoals', null);
		      	} else {
		      		match.set('homegoals', parseInt(updatedMatch.value));
		      	}
			    
			    match.save().then(function () {
			    	group.save();
			    });
		    });
	    },
	    updateAwayGoals(updatedMatch) {
	      	var group = this.model.group;

		    this.store.findRecord('match', updatedMatch.id).then(function(match) {
			    if(updatedMatch.value === '') {
		      		match.set('awaygoals', null);
		      	} else {
		      		match.set('awaygoals', parseInt(updatedMatch.value));
		      	}

			    match.save().then(function () {
			    	group.save();
			    });
		    });
	    },
	    updateResults() {
	    	var group = this.model.group;
        	var teams = group.get('teams');
	        var matches = group.get('matches');

	        for(var j = 0; j < matches.length; j++) {
	        	var hometeam = teams.findBy('name', matches.objectAt(j).get('hometeam'));
	        	var awayteam = teams.findBy('name', matches.objectAt(j).get('awayteam'));

	            var hometeamwin = (matches.objectAt(j).get('homegoals') > matches.objectAt(j).get('awaygoals') ? true : false);
	            var draw = (matches.objectAt(j).get('homegoals') === matches.objectAt(j).get('awaygoals') ? true : false);
	            var awayteamwin = (matches.objectAt(j).get('homegoals') < matches.objectAt(j).get('awaygoals') ? true : false);

	            if((matches.objectAt(j).get('homegoals') !== null && matches.objectAt(j).get('homegoals') !== '' && !isNaN(matches.objectAt(j).get('homegoals'))) ||
	               (matches.objectAt(j).get('awaygoals') !== null && matches.objectAt(j).get('awaygoals') !== '' && !isNaN(matches.objectAt(j).get('awaygoals')))) {
	                var hometeamgoalsscored = (matches.objectAt(j).get('homegoals') !== null && matches.objectAt(j).get('homegoals') !== '' && !isNaN(matches.objectAt(j).get('homegoals'))) ? parseInt(matches.objectAt(j).get('homegoals')) : 0;
	                var hometeamgoalsagainst = (matches.objectAt(j).get('awaygoals') !== null && matches.objectAt(j).get('awaygoals') !== '' && !isNaN(matches.objectAt(j).get('awaygoals'))) ? parseInt(matches.objectAt(j).get('awaygoals')) : 0;
	                var awayteamgoalsscored = (matches.objectAt(j).get('awaygoals') !== null && matches.objectAt(j).get('awaygoals') !== '' && !isNaN(matches.objectAt(j).get('awaygoals'))) ? parseInt(matches.objectAt(j).get('awaygoals')) : 0;
	                var awayteamgoalsagainst = (matches.objectAt(j).get('homegoals') !== null && matches.objectAt(j).get('homegoals') !== '' && !isNaN(matches.objectAt(j).get('homegoals'))) ? parseInt(matches.objectAt(j).get('homegoals')) : 0;

	                hometeam.incrementProperty('gamesplayed');
	                hometeam.incrementProperty('wins', (hometeamwin ? 1 : 0));
	                hometeam.incrementProperty('ties', (draw ? 1 : 0));
	                hometeam.incrementProperty('losses', (awayteamwin ? 1 : 0));
	                hometeam.incrementProperty('goalsscored', hometeamgoalsscored);
	                hometeam.incrementProperty('goalsagainst', hometeamgoalsagainst);
	                hometeam.incrementProperty('points', (hometeamwin ? 3 : (draw ? 1 : 0)));

	                awayteam.incrementProperty('gamesplayed');
	                awayteam.incrementProperty('wins', (awayteamwin ? 1 : 0));
	                awayteam.incrementProperty('ties', (draw ? 1 : 0));
	                awayteam.incrementProperty('losses', (hometeamwin ? 1 : 0));
	                awayteam.incrementProperty('goalsscored', awayteamgoalsscored);
	                awayteam.incrementProperty('goalsagainst', awayteamgoalsagainst);
	                awayteam.incrementProperty('points', (awayteamwin ? 3 : (draw ? 1 : 0)));

	                hometeam.save().then(function() {
	                	awayteam.save().then(function() {
	                		group.save();
	                	});
	                });
	            }
	        }
	    }
  	}
});
