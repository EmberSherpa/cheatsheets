import Ember from 'ember';

const Component = Ember.Component.extend({
  classNames: 'layout-row flex layout-padding'
});

// BEGIN-SNIPPET shared-state_context
export default Component.extend({
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis neque porta accumsan sodales. `,
  actions: {
    changeText(text) {
      this.set('text', text);
    }
  }
});
// END-SNIPPET