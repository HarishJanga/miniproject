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
      
      
      
        const auth = firebase.auth();
        
      
      
      
        function myFunction(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("New Admin User Created");
        }
        
        
        
