import DS from 'ember-data';

export default DS.Model.extend({
	date: DS.attr('date', { defaultValue: new Date()} ),
	hometeam: DS.attr('team'),
  	awayteam: DS.attr('team'),
  	homegoals: DS.attr('number', { defaultValue: 0 }),
  	awaygoals: DS.attr('number', { defaultValue: 0 })
});
