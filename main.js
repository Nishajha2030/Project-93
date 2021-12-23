function addUser(){
    var userName=document.getElementById("username").value;
    localStorage.setItem("name",userName)
    window.location="kwitter_room.html"

}