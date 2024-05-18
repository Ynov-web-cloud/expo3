//
//
//
//
//

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'expo-router';

const auth = getAuth();
export default getUserAuth = () => {
    const router = useRouter()
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            console.log("User is signed in")
            // ...
        } else {
            console.log("Error signing user...")
            router.replace('/authentication')
            // User is signed out
            // ...
        }
    });
}