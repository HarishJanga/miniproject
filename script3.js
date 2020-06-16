// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDCbF5R3za4kARU6_HB75d-xhzC7becbK0",
  authDomain: "ams-cvr.firebaseapp.com",
  databaseURL: "https://ams-cvr.firebaseio.com",
  projectId: "ams-cvr",
  storageBucket: "ams-cvr.appspot.com",
  messagingSenderId: "363078483627",
  appId: "1:363078483627:web:ad2c84ea11b0164ea6c1ee",
  measurementId: "G-W95EYHQ5ZB"
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