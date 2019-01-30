// Initialize Firebase
var config = {
  apiKey: "AIzaSyCG9VLV74sbEn8euipo0YIZ8ig9DkQPSFs",
  authDomain: "train-time-c52c8.firebaseapp.com",
  databaseURL: "https://train-time-c52c8.firebaseio.com",
  projectId: "train-time-c52c8",
  storageBucket: "train-time-c52c8.appspot.com",
  messagingSenderId: "706775152034"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {
  event.preventDefault();
  // Get values from form inputs
  var name = $("#inputTrainName")
    .val()
    .trim();
  var destination = $("#inputDestination")
    .val()
    .trim();
  var trainTime = moment(
    $("#inputTrainTime")
      .val()
      .trim(),
    "HH:mm"
  ).format("X");
  var frequency = $("#inputFrequency")
    .val()
    .trim();

  // Test for variables entered
  console.log(name);
  console.log(destination);
  console.log(trainTime);
  console.log(frequency);

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: name,
    destination: destination,
    trainTime: trainTime,
    frequency: frequency
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Alert
  alert("New train successfully added");
  console.log(alert);

  $("#inputTrainName").val("");
  $("#inputDestination").val("");
  $("#inputTrainTime").val("");
  $("#inputFrequency").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildkey) {
  console.log(childSnapshot.val());

  // Stores everything into a variable.
  var train = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().trainTime;
  var frequency = childSnapshot.val().frequency;

  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

  var diffTime = moment().diff(moment.unix(trainTime), "minutes");
  var timeRemainder = diffTime % frequency;
  var minutes = frequency - timeRemainder;
  var nextTrainArrival = moment()
    .add(minutes, "m")
    .format("HH:mm");

  console.log(minutes);
  console.log(nextTrainArrival);
  console.log(moment().format("HH:mm"));
  console.log(nextTrainArrival);

  // Appends train info to table
  $("#train-table > tbody").append(
    "<tr><td>" +
      train +
      "</td><td>" +
      destination +
      "</td><td>" +
      frequency +
      " mins" +
      "</td><td>" +
      nextTrainArrival +
      "</td><td>" +
      minutes +
      "</td></tr>"
  );
});