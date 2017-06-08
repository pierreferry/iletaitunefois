Router.configure({
  layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',

	// waitOn: function() { return Meteor.subscribe('endcards'); }
});

//Home
Router.route('/', {name: 'home'});

//Login
Router.route('/profile', {name: 'profileEdit'});

//Endcards
Router.route('/endcards', {name: 'endcardsList'});
Router.route('/endcards/submit', {name: 'endcardSubmit'});
Router.route('/endcards/:_id', {
	name: 'endcardPage',
	data: function() { return Endcards.findOne(this.params._id); }
})
Router.route('/endcards/:_id/edit', {
  name: 'endcardEdit',
  data: function() { return Endcards.findOne(this.params._id); }
});

//Game
Router.route('game', {name: 'game'});
