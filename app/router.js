import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('shared-state');
  this.route('copying-incoming-value');
});

export default Router;
