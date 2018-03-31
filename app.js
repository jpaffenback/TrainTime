// Initialize Firebase
var config = {
    apiKey: "AIzaSyCYni1Eo82QQSZocutT9hCae1NUvs5By6I",
    authDomain: "traintime-fe33b.firebaseapp.com",
    databaseURL: "https://traintime-fe33b.firebaseio.com",
    projectId: "traintime-fe33b",
    storageBucket: "",
    messagingSenderId: "315032599878"
  };
  firebase.initializeApp(config);


var database = firebase.database();


// Initial Values
var trainName = "";
var destination = "";
var firstTime = 0;
var frequency = 0;
var nextArrival = 0;
var minAway = 0;



// Clear Firebase
 database.ref().set({

   });


database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
});

database.ref().on("child_added", function(snapshot) {
    console.log("Child added");
    
    var newTrainName = snapshot.val().trainName;
    var newDestination = snapshot.val().destination;
    var newFirstTime = snapshot.val().firstTime;
    var newFrequency = snapshot.val().frequency;
    var newNextArrival = snapshot.val().nextArrival;
    var newMinAway = snapshot.val().minAway;
    
    
    createRow(newTrainName,newDestination,newFirstTime,newFrequency,newNextArrival,newMinAway);
});

var createRow = function(newTrainName,newDestination,newFirstTime,newFrequency,newNextArrival,newMinAway) {
    
    var tBody = $("tbody");
    var tRow = $("<tr>");

   
    var trainNameTd = $("<td>").text(newTrainName);
    var destinationTd = $("<td>").text(newDestination);
    var firstTimeTd = $("<td>").text(newFirstTime);
    var frequencyTd = $("<td>").text(newFrequency);
    var nextArrivalTd = $("<td>").text(newNextArrival);
    var minAwayTd = $("<td>").text(newMinAway);
    

    
    tRow.append(trainNameTd, destinationTd, firstTimeTd, frequencyTd, nextArrivalTd, minAwayTd);
    

    
    tBody.append(tRow);
  };


$("#submit").on("click", function(event) {
    
    event.preventDefault();

    

    
   trainName = $("#name-input").val().trim();
    destination = $("#destination").val().trim();
    firstTime = $("#time").val().trim();
    frequency = $("#frequency-input").val().trim();
    
   }) 


   //need to push info to table
   //need to add moment.js to add the dynamic time changes. 
  
  