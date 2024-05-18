//
//
//
//
//

import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from "../src/components/header"

export default function App() {
  return (
    <>
      <Header />
      <h1>Home</h1>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})