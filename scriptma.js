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
        
      
      
      
        function myFunction(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("New Admin User Created");
        }
        
        
        
