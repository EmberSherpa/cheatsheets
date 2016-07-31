import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shared-state/editor-with-preview', 'Integration | Component | shared state/editor with preview', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{shared-state/editor-with-preview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#shared-state/editor-with-preview}}
      template block text
    {{/shared-state/editor-with-preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
