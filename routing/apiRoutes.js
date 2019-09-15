var friendData = require("../data/friendData");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });
  
  $(".submit").on("click", function(event) {
    event.preventDefault();
    // Here we grab the form elements
        var newFriend = {
            Name: $("#name").val().trim(),
            photo: $("#picture"),
            question1: $("#question1").val(),
            question2: $("#question2").val(),
            question3: $("#question3").val(),
            question4: $("#question4").val(),
            question5: $("#question5").val(),
            question6: $("#question6").val(),
            question7: $("#question7").val(),
            question8: $("#question8").val(),
            question9: $("#question9").val(),
            question10: $("#question10").val(),
        };
    });
    console.log(newFriend);

    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        res.json(newFriend);
        console.log(newFriend);
    });


        // for (var i = 0; i < characters.length; i++) {
        //     if (chosen === characters[i].routeName) {
        //       return res.json(characters[i]);
        
        // Clear the form when submitting
    
            $("#name").val().trim(""),
            $("#picture"),
            $("#question1").val(""),
            $("#question2").val(""),
            $("#question3").val(""),
            $("#question4").val(""),
            $("#question5").val(""),
            $("#question7").val(""),
            $("#question8").val(""),
            $("#question9").val(""),
            $("#question10").val("")
};
