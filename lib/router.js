Router.configure({
  layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',

	// waitOn: function() { return Meteor.subscribe('endcards'); }
});

Router.route('/', {name: 'home'});
Router.route('/endcards', {name: 'endcardsList'});
Router.route('/endcards/submit', {name: 'endcardSubmit'});
