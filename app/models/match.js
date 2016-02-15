import DS from 'ember-data';

export default DS.Model.extend({
	date: DS.attr('date', { defaultValue: new Date()} ),
	dateInfo: Ember.computed('date', function() {
    return moment(this.get('date')).format('YYYY-MM-DD');
  }),
	hometeam: DS.attr('string'),
  	awayteam: DS.attr('string'),
  	homegoals: DS.attr('number', { defaultValue: null }),
  	awaygoals: DS.attr('number', { defaultValue: null })
});
