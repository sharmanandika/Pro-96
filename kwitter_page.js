//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBjBzXSrh8L6KNeZIxNxPHehuCN-Jx1gVM",
    authDomain: "kwitter-99ce5.firebaseapp.com",
    databaseURL: "https://kwitter-99ce5-default-rtdb.firebaseio.com",
    projectId: "kwitter-99ce5",
    storageBucket: "kwitter-99ce5.appspot.com",
    messagingSenderId: "141424811104",
    appId: "1:141424811104:web:248da637f123b2b670b705"
  };
  
 
 firebase.initializeApp(firebaseConfig);
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");
function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
document.getElementById("msg").value="";
}   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
