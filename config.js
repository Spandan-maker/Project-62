import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJQQsogho4klnb6yGZ-2emsWTlxAMyoYA",
  authDomain: "project-60-802eb.firebaseapp.com",
  databaseURL: "https://project-60-802eb-default-rtdb.firebaseio.com",
  projectId: "project-60-802eb",
  storageBucket: "project-60-802eb.appspot.com",
  messagingSenderId: "1067240801918",
  appId: "1:1067240801918:web:c40021dd21773be724fa2f"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

//let app = firebase.initializeApp(firebaseConfig);
export default  firebase.database()

console.log(firebase.name);
console.log(firebase.database());
 
 

  