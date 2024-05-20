import { router } from 'expo-router';
import app from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(user)
            console.log("signup success")
            router.replace('/profil');
        })
        .catch((error) => {
            console.log("Error in user's creation")
            console.log(error.message);
        });
}

export const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            console.log("signin success")
            router.replace('/profil');
        })
        .catch((error) => {
            console.log("Error in user's sign in")
            console.log(error.message);
        });
}
