import Ember from 'ember';

const {
  Component
} = Ember;

// BEGIN-SNIPPET copying-incoming-value_editor
export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('_value', this.get('value'));
  },
  actions: {
    save() {
      this.sendAction('onSave', this.get('_value'));
    }
  }
});
// END-SNIPPET