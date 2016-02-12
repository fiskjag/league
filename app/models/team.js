import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  gamesplayed: DS.attr('number', { defaultValue: 0 }),
  wins: DS.attr('number', { defaultValue: 0 }),
  ties: DS.attr('number', { defaultValue: 0 }),
  losses: DS.attr('number', { defaultValue: 0 }),
  goalsscored: DS.attr('number', { defaultValue: 0 }),
  goalsagainst: DS.attr('number', { defaultValue: 0 }),
  goaldiff: Ember.computed('goalsscored', 'goalsagainst', function() {
    return this.get('goalsscored') - this.get('goalsagainst');
  }),
  points: DS.attr('number', { defaultValue: 0 })//,
  //players: DS.hasMany('player')
});
