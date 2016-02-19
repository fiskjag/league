import DS from 'ember-data';

export default DS.Model.extend({
	awaygoals: DS.attr('number', { defaultValue: null }),
	awayteam: DS.attr('string'),
	date: DS.attr('date', { defaultValue: new Date()} ),
	dateInfo: Ember.computed('date', function() {
    	return moment(this.get('date')).format('YYYY-MM-DD');
  	}),
  	homegoals: DS.attr('number', { defaultValue: null }),
	hometeam: DS.attr('string'),
  	
	group: DS.belongsTo('group', { async: true }),
});
