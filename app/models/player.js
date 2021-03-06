import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  fullname: Ember.computed('firstname', 'surname', function() {
      return this.get('firstname') + ' ' + this.get('surname');
  }),
  goalsscored: DS.attr('number', { defaultValue: 0 }),
  surname: DS.attr('string'),
  
  team: DS.belongsTo('team', { async: true }),
});
