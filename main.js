var yelp = require("yelp").createClient({
  consumer_key: "gyZGmtAZ9A7Ysko3RSMgYg",
  consumer_secret: "Od77o2-n4x2w03sYQ4rtyXZsSH4",
  token: "6lFjnbDmjSA3srFzBxnNAde_eV2IRl8U",
  token_secret: "HGBaCq_orp6McO8L2EkQilQcnWg"
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "food", location: "Montreal"}, function(error, data) {
  console.log(error);
  console.log(data);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business("yelp-san-francisco", function(error, data) {
  console.log(error);
  console.log(data);
});

var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');