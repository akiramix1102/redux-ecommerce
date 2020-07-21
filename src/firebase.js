import firebase from 'firebase'
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const config= {
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

if (firebase.apps.length) {
    firebase.initializeApp(config);
}

class Firebase {
    constructor() {
        firebase.initializeApp(config)
        this.auth = firebase.auth()
        this.db = firebase.firestore()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
        
    }
    
    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

}

export default new Firebase();