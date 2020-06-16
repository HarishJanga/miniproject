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