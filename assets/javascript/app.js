

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

