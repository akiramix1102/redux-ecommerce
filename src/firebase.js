import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

var config = {
    apiKey: "AIzaSyA_gTMxKqD0gwP-WBulYHlniJIZpdi_FhI",
    authDomain: "ecommerce-hat.firebaseapp.com",
    databaseURL: "https://ecommerce-hat.firebaseio.com",
    projectId: "ecommerce-hat",
    storageBucket: "ecommerce-hat.appspot.com",
    messagingSenderId: "493924374663",
    appId: "1:493924374663:web:8c67895b832a593a734022",
    measurementId: "G-5CN7B7Z4HD"
};
// Initialize Firebase
app.initializeApp(config);
app.analytics();

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
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


    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

}

export default new Firebase()