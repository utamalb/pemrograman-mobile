// components/Home.js
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Kontak from './kontak';

const Home = ({ navigation }) => {
  const handlePress = (gambar, judul, telpon) => {
    navigation.navigate('About', { gambar, judul, telpon });
  };

  return (
    <View style={styles.container}>
      <Kontak
        gambar={require('../assets/snack-icon.png')}
        judul="M Utama"
      />
      <Button
        title="Deskripsi"
        onPress={() => handlePress(require('../assets/snack-icon.png'), 'M Utama', '089630461568')}
      />

      <Kontak
        gambar={require('../assets/snack-icon.png')}
        judul="Kamil"
      />
      <Button
        title="Deskripsi"
        onPress={() => handlePress(require('../assets/snack-icon.png'), 'Kamil', '085746551233')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
