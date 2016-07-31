// BEGIN-SNIPPET shared-state_context
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'layout-row flex layout-padding',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis neque porta accumsan sodales. Nullam laoreet et tortor sed commodo. Sed a arcu ultrices, dignissim nisl nec, tempor nisi. Duis rhoncus dolor egestas tellus gravida, ac tincidunt velit egestas. Donec at augue vel purus rhoncus sagittis sit amet id massa.`,
  actions: {
    changeText(text) {
      this.set('text', text);
    }
  }
});
// END-SNIPPET