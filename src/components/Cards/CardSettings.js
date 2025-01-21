import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

export default function CardSettings() {
  const [username, setUsername] = useState('lucky.jesse');
  const [email, setEmail] = useState('jesse@example.com');
  const [firstName, setFirstName] = useState('Lucky');
  const [lastName, setLastName] = useState('Jesse');
  const [address, setAddress] = useState('Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09');
  const [city, setCity] = useState('New York');
  const [country, setCountry] = useState('United States');
  const [postalCode, setPostalCode] = useState('Postal Code');
  const [aboutMe, setAboutMe] = useState('A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source.');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My account</Text>
        <Button title="Settings" onPress={() => {}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>User Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
        />
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          value={postalCode}
          onChangeText={setPostalCode}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="About me"
          value={aboutMe}
          onChangeText={setAboutMe}
          multiline
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a5568',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#718096',
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 15,
    fontSize: 16,
    color: '#4a5568',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top', // for Android multiline behavior
  },
});
