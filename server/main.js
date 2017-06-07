import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

if (Meteor.isServer) {
  Meteor.startup(function() {
    return Meteor.methods({
      resetLogs: function() {
        return Logs.remove({});
      },
			resetEndcards: function() {
				return Endcards.update( {"owner": {$ne: ""} }, {$set: {"owner": ""}}, {multi: true} );
			}
    });
  });
}
