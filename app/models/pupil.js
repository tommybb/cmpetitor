import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  birthDate: attr('date'),
  classRoom: belongsTo('class-room')
});
