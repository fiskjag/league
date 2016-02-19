import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('number'),
  groups: DS.hasMany('group', { async: true }),
});
