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
        router.replace("/authentication")
    }).catch((error) => {
        console.log(error)
    });
}