function login() {

   Use = document.getElementById("UserName").value;
    localStorage.setItem("UserName", Use);
    window.location = "kwitter_room.html";

}