Template.endcardEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentEndcardId = this._id;
    var endcardProperties = {
      text: $(e.target).find('[name=text]').val(),
    }

    Endcards.update(currentEndcardId, {$set: endcardProperties}, function(error) {
      if (error) {
        // affiche l'erreur à l'utilisateur
        alert(error.reason);
      } else {
        Router.go('endcardPage', {_id: currentEndcardId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this endcard?")) {
      var currentEndcardId = this._id;
      Endcards.remove(currentEndcardId);
      Router.go('endcardsList');
    }
  }
});
