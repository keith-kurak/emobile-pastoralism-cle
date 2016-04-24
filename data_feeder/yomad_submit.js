var Firebase = require("firebase");
var fs = require('fs');

var myArgs = process.argv.slice(2);

fs.readFile(myArgs[0], 'utf8', function (err, data) {
  if (err) throw err;
  var messageToPost = JSON.parse(data);

  var myFirebaseRef = new Firebase('https://yomad.firebaseio.com/locations/' + messageToPost.locationId + '/messages');

  myFirebaseRef.push().set(messageToPost.message);

  //this is a total hack. Firebase keeps the connection open and doesn't let it close, and I can't find a way in its API to close a connection.
  ////if you don't close the connection fast enough, it doesn't post the message.
  setTimeout(function() {
    process.exit();
  }, 2000);
});