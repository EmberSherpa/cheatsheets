import Ember from 'ember';

const Component = Ember.Component.extend({
  classNames: 'flex'  
});

// BEGIN-SNIPPET shared-state_nested-editor
export default Component.extend({
  actions: {
    changeText(text) {
      this.sendAction('changeText', text);
    }
  }
});
// END-SNIPPET
