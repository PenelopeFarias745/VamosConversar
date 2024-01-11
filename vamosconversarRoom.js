const firebaseConfig = {
  apiKey: "AIzaSyDVFZ0zuPblyIeVBTbvYSn5MJ9umWtC5uo",
  authDomain: "vamosconversar-353fb.firebaseapp.com",
  databaseURL: "https://vamosconversar-353fb-default-rtdb.firebaseio.com/",
  projectId: "vamosconversar-353fb",
  storageBucket: "vamosconversar-353fb.appspot.com",
  messagingSenderId: "951756045487",
  appId: "1:951756045487:web:1ec75e7b69b7cc34cd685a"
};
    
   

firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
    roomName = document.getElementById("roomName").value;

    firebase.database().ref("/").child(roomName).update
  ({ 
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "vamosconversarPage.html";
}

function getData() 
{  firebase.database().ref("/").on('value', function(snapshot)
       { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
          { childKey  = childSnapshot.key;
               roomNames = childKey;

       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";

      document.getElementById("output").innerHTML += row;

    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name); 
  localStorage.setItem("roomName", name); 
  window.location = "vamosconversarPage.html";
}

function logout()
{
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
