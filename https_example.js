var https = require('https');

console.log('I did it!')

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
///This was added as next step after the response (step 6 in compass)
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}
//Initial version of the callback:
// var callback = function() {
//   console.log('In response handler callback!');
// }

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");