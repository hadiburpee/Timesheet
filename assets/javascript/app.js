
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

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD17_Bi4Go9Xgew2wnGqEkCtccBt7d7e30",
    authDomain: "timesheetdata-805c0.firebaseapp.com",
    databaseURL: "https://timesheetdata-805c0.firebaseio.com",
    projectId: "timesheetdata-805c0",
    storageBucket: "timesheetdata-805c0.appspot.com",
    messagingSenderId: "716811773412"
  };
  firebase.initializeApp(config);

    
       
        var database = firebase.database();
    
        var name = "";
        var role = "";
        var startDate = "";
        var rate = "";




        $("#run-search").on("click", function() {
    
          event.preventDefault();

           // Get inputs
            name = $("#employee-name-input").val().trim();
            role = $("#role-input").val().trim();
            startDate = $("#start-input").val().trim();
            rate = $("#rate-input").val().trim();


            // Change what is saved in firebase
            database.ref().set({
              name: name,
              role: role,
              startDate: startDate,
              rate: rate
            });



          });

