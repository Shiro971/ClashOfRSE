import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';

// Import custom components like Navbars and Footers (if you need them)
import IndexNavbar from "../components/Navbars/IndexNavbar.js"; // Assuming a React Native Navbar component
import Footer from "../components/Footers/Footer.js"; // Assuming a React Native Footer component

export default function Index() {
  const navigation = useNavigation(); // Get navigation from React Navigation

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        <IndexNavbar />  {/* Your custom Navbar component (adjust if needed) */}
      </Text>
      
      <View style={styles.header}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>
              Relevez le défi RSE : Classez, optimisez, et devenez un leader de l’engagement responsable avec Clash of RSE !
            </Text>
            <Text style={styles.subHeaderText}>
              Découvrez Clash of RSE, l'application qui transforme l'engagement RSE en un levier de performance et de collaboration.
            </Text>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.buttonStart}
                onPress={() => navigation.navigate("Login")} // Navigate to Login screen
              >
                <Text style={styles.buttonText}>Commencer maintenant</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.buttonLearnMore}
                onPress={() => navigation.navigate("Landing")} // Navigate to Landing screen
              >
                <Text style={styles.buttonText}>En savoir plus</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Image
          source={require("../assets/img/pattern_react.png")}
          style={styles.image}
        />
      </View>

      <Text>
        <Footer /> {/* Your custom Footer component */}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 16,
    height: '100%',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  textContainer: {
    maxWidth: 800,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B5563', // Customize color based on your theme
    marginBottom: 16,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#6B7280', // Customize color based on your theme
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonStart: {
    backgroundColor: '#3B82F6', // Customize button color
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginRight: 10,
  },
  buttonLearnMore: {
    backgroundColor: '#4B5563', // Customize button color
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '60%',
    height: 'auto',
    maxHeight: 320,
    marginTop: -40,
  },
});
