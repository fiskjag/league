import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('league', {
    path: '/:league_id'
  }, function() {
    this.route('group', {
      path: '/:group_id'
    }, function() {
      this.route('team', {
        path: '/:team_id'
      }, function() {
        this.route('player', function() {});
        this.route('add-player');
      });
      this.route('add-team');
      this.route('generate-matches');
    });
    this.route('add-group');
  });
  this.route('add-league');
});

export default Router;
