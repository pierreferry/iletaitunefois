Template.game.events({
  'click .draw_end': function(e) {
		e.preventDefault();

		endcard = Endcards.findOne({"owner": ""});

		if (endcard) {
			username = Meteor.user().profile.name
			var log = {
				text: 'a pioché une carte fin.',
				from: username
			}
			log._id = Logs.insert(log);
			Endcards.update(endcard._id, {$set: {"owner": username}});
		}
		else {
			console.log("No more endcards.")
		}
  },

	'click .delete': function(e) {
		e.preventDefault();

		if (confirm("Voulez vous vraiment supprimer cette partie ?")) {
			Meteor.call('resetLogs');
			Meteor.call('resetEndcards');
		}
	}
});

Template.game.helpers({
	logs: function() {
		return Logs.find();
	}
});
