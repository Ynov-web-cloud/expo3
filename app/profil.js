import React, { useEffect, useState } from "react";
import { getCurrentUser, updateUserProfile, uploadImageAsync } from "../firebase/get_profil";
import Header from "../src/components/header";
import * as ImagePicker from 'expo-image-picker';

const Profil = () => {
    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [newDisplayName, setNewDisplayName] = useState('');
    const [newPhotoURL, setNewPhotoURL] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const user = getCurrentUser();
        if (user) {
            setUser(user);
            setDisplayName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, []);

    const handleUpdateProfile = async () => {
        try {
            let uploadedPhotoURL = photoURL;
            if (newPhotoURL) {
                uploadedPhotoURL = await uploadImageAsync(newPhotoURL);
            }
            await updateUserProfile(newDisplayName || displayName, uploadedPhotoURL);
            setDisplayName(newDisplayName || displayName);
            setPhotoURL(uploadedPhotoURL);
            setNewDisplayName('');
            setNewPhotoURL('');
        } catch (error) {
            setError(error.message);
        }
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setNewPhotoURL(result.assets[0].uri);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <Header />
            <h1>Profil</h1>
            {user ? (
                <div>
                    {photoURL && <img src={photoURL} alt="Profile" style={{ width: '100px', height: '100px' }} />}
                    <p>Display Name: {displayName}</p>
                    <input
                        type="text"
                        value={newDisplayName}
                        onChange={(e) => setNewDisplayName(e.target.value)}
                        placeholder="New Display Name"
                    />
                    <button onClick={pickImage}>Pick an image</button>
                    {newPhotoURL && <img src={newPhotoURL} alt="New Profile" style={{ width: '100px', height: '100px' }} />}
                    <button onClick={handleUpdateProfile}>Update Profile</button>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
            ) : (
                <p>No user is logged in</p>
            )}
        </div>
    );
};

export default Profil;
