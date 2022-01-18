
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAp8BKa4mpB7YuXogYea7BFmmdcJ8p9reU",
      authDomain: "kwitter-3957d.firebaseapp.com",
      projectId: "kwitter-3957d",
      storageBucket: "kwitter-3957d.appspot.com",
      messagingSenderId: "709028692995",
      appId: "1:709028692995:web:d3cb45a1cb0cc334f97a36",
      measurementId: "G-18WQ82E88D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("div1").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("div1").innerHTML += row;

                  //End code
            });
      });

}
getData();
user_name = localStorage.getItem("UserName");
document.getElementById("WELCOME").innerHTML = "Welcome" + user_name + "!";

function addroom() {
      var room_name = document.getElementById("RoomName").value;
      firebase.database().ref("/").child(room_name).update({
            key: "Value"

      });
      localStorage.setItem("RoomName", room_name);
      window.location = "kwitter_page.html";

}
function redirectToRoomName(name) {
      localStorage.setItem("RoomName", name);
      window.location = "kwitter_page.html";


}