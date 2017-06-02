Template.endcardSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var endcard = {
      text: $(e.target).find('[name=text]').val(),
    };

    endcard._id = Endcards.insert(endcard);
    Router.go('endcardsList');
  }
});
