var path = require("path");

module.exports = function(app) {

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


};



// function handleRequest(req, res) {
//   var path = req.url;
// switch (path) {
//   case "/survey":
//     return renderHTML(path + ".html", res);
//     default:
//       return renderHTML("/home.html",res);
// }

// function renderHTML(filePath, res) {
//   return fs.readFile(__dirname + filePath, function(err, data) {
//     if (err) throw err;
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// };
// }

