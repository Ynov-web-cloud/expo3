import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SignUpMethod from '../src/components/SignUp';
import SignInMethod from '../src/components/SignIn';
import SignWithPhone from '../src/components/SignWithPhone'; // Renommez le fichier en SignWithPhone

const AuthPage = () => {
  const [authMethod, setAuthMethod] = useState("");

  const changeAuthMethod = () => {
    setAuthMethod(authMethod === "signup" ? "signin" : "signup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expo auth</Text>
      <SignWithPhone />
      {authMethod === "signin" ? (
        <View>
          <Text>Haven't any account yet?</Text>
          <Button title="Create one" onPress={changeAuthMethod} />
        </View>
      ) : (
        <View>
          <Text>Already have an account?</Text>
          <Button title="Sign in!" onPress={changeAuthMethod} />
        </View>
      )}
      {authMethod === "signup" ? <SignUpMethod /> : <SignInMethod />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default AuthPage;
