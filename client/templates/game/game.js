Template.game.events({
  'click .draw_end': function(e) {
		e.preventDefault();

		endcard = Endcards.findOne({"owner": ""});

		if (endcard) {
			var log = {
				text: 'a pioché une carte fin.',
				from: 'pferry'
			}
			log._id = Logs.insert(log);
			Endcards.update(endcard._id, {$set: {"owner": 'coucou'}});
		}
		console.log(Meteor.user())
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
