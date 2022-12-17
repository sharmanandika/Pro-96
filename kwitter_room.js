
const firebaseConfig = {
      apiKey: "AIzaSyAfdk7RFmcrZ2GojRm8vDsEqX_BM8p0Et8",
      authDomain: "project-94-aeb63.firebaseapp.com",
      databaseURL: "https://project-94-aeb63-default-rtdb.firebaseio.com",
      projectId: "project-94-aeb63",
      storageBucket: "project-94-aeb63.appspot.com",
      messagingSenderId: "301099724203",
      appId: "1:301099724203:web:a2dbd5c300d40078d1b6ee"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome "+ user_name+ "!";
   function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding user"
      });
      localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+ Room_names+ "</div> <hr>";
       document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirect(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}
