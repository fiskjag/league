import DS from 'ember-data';

export default DS.Model.extend({
	date: DS.attr('date'),
	hometeam: DS.attr('string'),
  	awayteam: DS.attr('string'),
  	homegoals: DS.attr('number'),
  	awaygoals: DS.attr('number')
});
