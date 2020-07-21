import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBuU8JAMt5D_z4XmnRqTW26F29dtjvqJr8",
    authDomain: "ecommerce-nqd.firebaseapp.com",
    databaseURL: "https://ecommerce-nqd.firebaseio.com",
    projectId: "ecommerce-nqd",
    storageBucket: "ecommerce-nqd.appspot.com",
    messagingSenderId: "532191588614",
    appId: "1:532191588614:web:1a477803620e5c2f386e87",
    measurementId: "G-6VXQY4DGE3"
};
// Initialize Firebase
const Fire = Firebase.initializeApp(firebaseConfig);

export default Fire;