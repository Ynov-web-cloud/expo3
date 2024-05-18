//
//
//
//
//

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
export default getUserAuth = () => {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            console.log("User is signed in")
            // ...
        } else {
            console.log("Error signing user...")
            window.location.href = '/authentication';
            // User is signed out
            // ...
        }
    });
}