import DS from 'ember-data';

export default DS.Model.extend({
  gamesplayed: DS.attr('number', { defaultValue: 0 }),
  goalsagainst: DS.attr('number', { defaultValue: 0 }),
  goalsscored: DS.attr('number', { defaultValue: 0 }),
  goaldiff: Ember.computed('goalsscored', 'goalsagainst', function() {
      return this.get('goalsscored') - this.get('goalsagainst');
  }),
  losses: DS.attr('number', { defaultValue: 0 }),
  name: DS.attr('string'),
  points: Ember.computed('wins', 'ties', function() {
      return this.get('wins') * 3 + this.get('ties');
  }),
  ties: DS.attr('number', { defaultValue: 0 }),
  wins: DS.attr('number', { defaultValue: 0 }),
  
  group: DS.belongsTo('group', { async: true }),
  players: DS.hasMany('player', { async: true }),
});
