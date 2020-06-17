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
window.onload=function(){
  var x=localStorage.getItem("vhno");
  document.getElementById("wmsg").innerHTML="Hii, "+x;
}
function hello(){
  location.reload();
}
function rating(){
var roll=localStorage.getItem("vhno");
var dccn=document.getElementById("DCCN").value;
var vpcn=document.getElementById("VPCN").value;
var mpi=document.getElementById("MPI").value;
var oe=document.getElementById("OE").value;
var pe=document.getElementById("PE").value;
var review=document.getElementById("Review").value;
var database = firebase.database();
var dbRef = database.ref('student').child(roll); 
dbRef.child("DCCN").set(dccn);
dbRef.child("VPCN").set(vpcn);
dbRef.child("MPI").set(mpi);
dbRef.child("OE").set(oe);
dbRef.child("PE").set(pe);
dbRef.child("REVIEW").set(review);
alert("Feedback successfully submited please remember to signout");
}
function signOut(){
  alert("You have been signed out");
  window.location="index.html";
}