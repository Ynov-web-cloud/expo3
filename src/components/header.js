//
//
//
//
//

import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Link } from "expo-router"
import signOutUser from "../../firebase/SignOut"

export default Header = () => {
    return (
        <>
            <View style={styles.container}>
                <Link style={styles.headerLink} href="/">Home</Link>
                <Link style={styles.headerLink} href="/profil">Profil</Link>
                <a style={styles.headerLink} onClick={signOutUser}>Logout</a>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    headerLink: {
        fontFamily: "system-ui",
        margin: "10px",
        
    }
});
