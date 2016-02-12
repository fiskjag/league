import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group', 'Unit | Model | group', {
  // Specify the other units that are required for this test.
  needs: ['model:league', 'model:team', 'model:match']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
