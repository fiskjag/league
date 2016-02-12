import Ember from 'ember';

export default Ember.Controller.extend({
	teamSortProps: ['points:desc', 'goaldiff:desc', 'goalsscored:desc'],
	sortedTeams: Ember.computed.sort('model.teams', 'teamSortProps'),

	matchSortProps: ['date'], 
	sortedMatches: Ember.computed.sort('model.matches', 'matchSortProps')
});
