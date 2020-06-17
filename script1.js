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
        
        
        
          const auth = firebase.auth();
  
  
          function signOut(){
              auth.signOut();
             alert("Signed Out");
             window.location="index.html";
              
          }
  
          function createUser(){
            let hno=document.getElementById('hno').value;
            let name=document.getElementById('name').value;
            let branch=document.getElementById('branch').value;
            let year=document.getElementById('year').value;
          let dbref=firebase.database().ref().child('student');
          dbref.child(hno).set({
            hno:hno,
            name:name,
            branch:branch,
            year:year
          });
          alert("user created succesfully");
          }
  
          function deleteaUser(){
            console.log("working");
            let hno=document.getElementById('dlt').value;
            let dbref=firebase.database().ref("student/"+hno);
            dbref.remove();
            alert(hno+" deleted succesfully");
          }
  
          function updateUser(){
            let hnon=document.getElementById('hnon').value;
            let namen=document.getElementById('namen').value;
            let branchn=document.getElementById('branchn').value;
            let yearn=document.getElementById('yearn').value;
            let dbref=firebase.database().ref("student/"+hnon);
            dbref.update({
              name:namen,
              branch:branchn,
              year:yearn
            });
            alert("details updated succesfully");
          }
  
          function Clear(){
            location.reload();
          }
  
          function createFaculty(){
          //  console.log("cf working");
          let fec=document.getElementById('fec').value;
          let fn=document.getElementById('fn').value;
          let fs=document.getElementById('fs').value;
          let dbref=firebase.database().ref().child('faculty');
          dbref.child(fn).set({
            mail:fec,
            subject:fs
          });
          alert("user created succesfully");
          }
        
          function deleteFaculty(){
            console.log("working");
            let fed=document.getElementById('fed').value;
            let dbref=firebase.database().ref("faculty/"+fed);
            dbref.remove();
            alert(fed+" deleted succesfully");
          }
  
          function updateFaculty(){
            let ref=document.getElementById('ref').value;
            let ne=document.getElementById('ne').value;
            let dbref=firebase.database().ref("faculty/"+ref);
            dbref.update({
             mail:ne
            });
            alert("details updated succesfully");
          }
  
          function test(){
            window.location="madmin.html";
          }
  
          