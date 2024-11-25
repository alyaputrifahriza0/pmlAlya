import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>alya putri fahriza hasibuan</Text>
      <Text style={styles.title}>Sistem Informasi</Text>
      <Text style={styles.title}>0702212130</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800080', // Warna ungu
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // Warna teks putih agar kontras
  },
});
