Template.hand.helpers({
	endcards: function() {
		if (Meteor.user()) {
			username = Meteor.user().profile.name;
			return Endcards.find({"owner": username, "played": null});
		}
	}
})

Template.hand.events({
	'dblclick .card': function(e) {
		e.preventDefault();

		username = Meteor.user().profile.name
		var log = {
			text: ' : ' + this.text,
			from: username
		}
		log._id = Logs.insert(log);
		Endcards.update(this._id, {$set: {"played": true}});
	}
})
