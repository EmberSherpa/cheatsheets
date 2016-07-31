import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shared-state/preview', 'Integration | Component | shared state/preview', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{shared-state/preview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#shared-state/preview}}
      template block text
    {{/shared-state/preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
