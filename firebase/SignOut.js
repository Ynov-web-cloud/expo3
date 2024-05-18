//
//
//
//
//

import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export default signOutUser = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "/authentication"
    }).catch((error) => {
        // An error happened.
    });
}