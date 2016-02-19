import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),

	league: DS.belongsTo('league'),

	teams: DS.hasMany('team', { async: true }),
	matches: DS.hasMany('match', { async: true }),
});