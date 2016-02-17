import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  surname: DS.attr('string'),
  fullname: Ember.computed('firstname', 'surname', function() {
      return this.get('firstname') + ' ' + this.get('surname');
  }),
  goalsscored: DS.attr('number')
});
