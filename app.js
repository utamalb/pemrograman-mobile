import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/kontak'; // Koreksi pernyataan impor

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Contact
          gambar={require("./assets/banner.jpg")}
          judul="Leonardo DiCaprio"
          telpon="0765535531"
        />
        <Contact
          gambar={require("./assets/COVID.jpg")}
          judul="Entin"
          telpon="0765535531"
        />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
