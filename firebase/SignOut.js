//
//
//
//
//

import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'expo-router';

const auth = getAuth();
const router = useRouter()
export default signOutUser = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        router.replace("/authentication")
    }).catch((error) => {
        // An error happened.
    });
}