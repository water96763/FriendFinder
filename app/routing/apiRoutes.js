var friendData = require("../data/friends");
// var path = require("path");
module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
 
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        res.json(newFriend);
        console.log(newFriend);
    });
        // function compare() {
        // for (var i = 0; i < friendData.length; i++) {
        //     if (chosen === characters[i].routeName) {
        //       return res.json(characters[i]);
        
   
};
