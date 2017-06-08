Template.profileEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    name = $(e.target).find('[name=name]').val();
  }
});
