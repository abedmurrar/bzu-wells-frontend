import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbRhi0zAAOYGT_wSpZygBJwlnWM54H4Qw",
  authDomain: "test-19dcc.firebaseapp.com",
  databaseURL: "https://test-19dcc.firebaseio.com",
  projectId: "test-19dcc",
  storageBucket: "test-19dcc.appspot.com",
  messagingSenderId: "697392024866",
  appId: "1:697392024866:web:82ba5b62972b466de1297b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
