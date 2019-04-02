import Firebase from "firebase"
        const config = {
        apiKey: "AIzaSyCtoCvAscTtco7wkzTZimB3A7GHegw_Rbk",
        authDomain: "naitdirectory.firebaseapp.com",
        databaseURL: "https://naitdirectory.firebaseio.com",
        projectId: "naitdirectory",
        storageBucket: "naitdirectory.appspot.com",
        messagingSenderId: "897458123389"
      };
const firebase = Firebase.initializeApp(config);
     export default firebase