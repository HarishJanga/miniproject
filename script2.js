   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyAS0OQtH-KB8b4X4OcdIeogRXmfOelWx4o",
    authDomain: "form-a5ec9.firebaseapp.com",
    databaseURL: "https://form-a5ec9.firebaseio.com",
    projectId: "form-a5ec9",
    storageBucket: "form-a5ec9.appspot.com",
    messagingSenderId: "138028896373",
    appId: "1:138028896373:web:dfac61ae6717b4d514a83c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
  var database = firebase.database();
  var dbRef = database.ref('student');  
    
  
  
    function signIn2(){
      var Rollnumber=document.getElementById("Rollnumber").value;
      if(Rollnumber==""){
        document.getElementById("msg").innerHTML="This field can't be empty!!";
      }
      else{
      dbRef.once('value',function(snapshot){
        snapshot.forEach(function(childsnapshot){
        var Roll=childsnapshot.child("hno").val();
       if(Rollnumber==Roll){
         localStorage.setItem("vhno",Rollnumber);
        window.location='student.html';
       }
       else{
         document.getElementById("msg").innerHTML="Invalid Roll Number";
       }
        });
        });
      }
     }