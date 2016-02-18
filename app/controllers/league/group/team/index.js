import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		incrementGoals: function(currentPlayer) {
			var team = this.model.team;
      
		    currentPlayer.incrementProperty('goalsscored');
		    currentPlayer.save().then(function () {
		    	team.save();
		    });
	    },
	    decrementGoals: function(currentPlayer) {
			var team = this.model.team;
	      
			if(currentPlayer.get('goalsscored') > 0) {
			    currentPlayer.decrementProperty('goalsscored');
			    currentPlayer.save().then(function () {
			    	team.save();
		    	});
		    } 	
	    },
	}
});
