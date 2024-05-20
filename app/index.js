import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { getDatabase, ref, push, onValue, set } from 'firebase/database';
import Header from '../src/components/header';

import app from "../firebaseConfig"

// Importer la configuration de Firebase
const database = getDatabase(app);

export default function App() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const commentsRef = ref(database, 'comments');

  useEffect(() => {
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const commentsArray = data ? Object.values(data) : [];
      setComments(commentsArray);
    });
  }, []);

  const handleSubmit = () => {
    const commentsRef = ref(database, 'comments');
    push(commentsRef, {
      text: comment,
      timestamp: new Date().toISOString(),
    });
    setComment('');
  };

  return (
    <>
      <Header />
        <Text style={styles.title}>Home</Text>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Poster un commentaire</Text>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={setComment}
          placeholder="Ajouter un commentaire"
        />
        <Button title="Poster" onPress={handleSubmit} />
        <Text style={styles.subtitle}>Commentaires:</Text>
        {comments.map((comment, index) => (
          <View key={index} style={styles.commentContainer}>
            <Text>{comment.text}</Text>
            <Text>{new Date(comment.timestamp).toLocaleString()}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  commentContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});
