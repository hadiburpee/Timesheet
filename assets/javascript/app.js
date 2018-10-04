$("#add-employee-btn").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
    var empName = $("#employee-name-input").val().trim();
    var empRole = $("#role-input").val().trim();
    var empStart = $("#start-input").val().trim();
    var empRate = $("#rate-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newEmp = {
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
    };  

      var config = {
        apiKey: "AIzaSyCzuJs-bPkkXMsE9dGtDkqT0LZT3v3WV0o",
        authDomain: "test1-47778.firebaseapp.com",
        databaseURL: "https://test1-47778.firebaseio.com",
        projectId: "test1-47778",
        storageBucket: "test1-47778.appspot.com",
        messagingSenderId: "519722482230"
      };
      firebase.initializeApp(config);
    
       
        var database = firebase.database();
    
    
        var clickCounter = 0;

        $("#click-button").on("click", function() {
    
          clickCounter++;  
          database.ref().set({
            clickCount: clickCounter
          });

