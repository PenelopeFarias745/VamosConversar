const firebaseConfig = {
    apiKey: "AIzaSyDVFZ0zuPblyIeVBTbvYSn5MJ9umWtC5uo",
    authDomain: "vamosconversar-353fb.firebaseapp.com",
    databaseURL: "https://vamosconversar-353fb-default-rtdb.firebaseio.com/",
    projectId: "vamosconversar-353fb",
    storageBucket: "vamosconversar-353fb.appspot.com",
    messagingSenderId: "951756045487",
    appId: "1:951756045487:web:1ec75e7b69b7cc34cd685a"
  };

  function logout()
{
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "vamosconversarRoom.html";
}
      
  firebase.initializeApp(firebaseConfig);

 userName = localStorage.getItem("userName");
 roomName = localStorage.getItem("roomName");

 function send()
 {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    })

    document.getElementById("msg") = ""
 }

