

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
    
        var name = "";
        var role = "";
        var startDate = "";
        var rate = "";




        $("#click-button").on("click", function() {
    
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
 