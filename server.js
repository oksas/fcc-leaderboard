var path = require("path");
var express = require("express");
var app = express();

var port = process.env.PORT || 4040;
var address = process.env.IP || "localhost";

app.use(express.static(__dirname));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, address, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Server listening on port ${port}`);
});
