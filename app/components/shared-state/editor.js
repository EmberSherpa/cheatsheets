// BEGIN-SNIPPET shared-state_nested-editor
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'flex',
  actions: {
    changeText(text) {
      this.sendAction('changeText', text);
    }
  }
});
// END-SNIPPET
