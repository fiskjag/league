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
	    }


  	}
});
