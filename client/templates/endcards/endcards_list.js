Template.endcardsList.helpers({
  endcards: function() {
		return Endcards.find();
	}
});

Template.endcardsList.events({
	'dblclick .card': function() {
		Router.go('endcardEdit', this);
	}
})
