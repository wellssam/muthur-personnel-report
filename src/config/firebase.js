import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARk5IXuBo9bNbj8wBo_8BKdLVsKVdarOM",
    authDomain: "muthur-personnel.firebaseapp.com",
    databaseURL: "https://muthur-personnel-default-rtdb.firebaseio.com",
    projectId: "muthur-personnel",
    storageBucket: "muthur-personnel.appspot.com",
    messagingSenderId: "636218123032",
    appId: "1:636218123032:web:3b24a34f635613f4a5b46d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth()
export default firebase;