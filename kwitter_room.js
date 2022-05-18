
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDrijoBvMrQC85Tpi3AebPD1nvzxtmMpLQ",
      authDomain: "kwitter-342eb.firebaseapp.com",
      databaseURL: "https://kwitter-342eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-342eb",
      storageBucket: "kwitter-342eb.appspot.com",
      messagingSenderId: "662719842196",
      appId: "1:662719842196:web:5d50fad07ea32d00667181"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
