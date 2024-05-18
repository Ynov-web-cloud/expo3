import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Fonction pour récupérer l'utilisateur actuel
export const getCurrentUser = () => {
    const auth = getAuth();
    return auth.currentUser;
};

// Fonction pour mettre à jour le profil de l'utilisateur
export const updateUserProfile = async (displayName, photoURL) => {
    const user = getCurrentUser();
    if (user) {
        try {
            await updateProfile(user, {
                displayName: displayName,
                photoURL: photoURL,
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

// Fonction pour télécharger une image sur Firebase Storage et obtenir l'URL de téléchargement
export const uploadImageAsync = async (uri) => {
    const storage = getStorage();
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `profile_images/${getCurrentUser().uid}`);
    await uploadBytes(storageRef, blob);
    return await getDownloadURL(storageRef);
};
