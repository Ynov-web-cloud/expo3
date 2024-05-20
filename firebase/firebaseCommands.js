// firebaseCommands.js
import app from '../firebaseConfig'
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

const db = getFirestore(app);


// Fonction pour récupérer les commentaires
export const getComments = (callback) => {
    const commentsQuery = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
    return onSnapshot(commentsQuery, callback);
};

// Fonction pour poster un commentaire
export const postComment = async (comment) => {
    try {
        await addDoc(collection(db, 'comments'), {
            text: comment,
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error posting comment: ", error);
    }
};