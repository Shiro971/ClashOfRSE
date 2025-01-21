import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Navbar from "../components/Navbars/AuthNavbar"; // Ensure your Navbar component is adapted for React Native
import Footer from "../components/Footers/Footer"; // Ensure your Footer component is adapted for React Native

import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you are using react-native-vector-icons for icons

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80' }}
            style={styles.backgroundImage}
          />
          <View style={styles.overlay}></View>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Clash of RSE</Text>
              <Text style={styles.description}>
                Clash of RSE est une application innovante qui permet aux entreprises de mesurer et d'optimiser leur score RSE (Responsabilité Sociétale des Entreprises). Elle offre un suivi détaillé de l'engagement écologique, social et de gouvernance de chaque collaborateur, tout en fournissant un classement global pour favoriser une compétitivité positive. Grâce à une interface simple et intuitive, l'application permet aux entreprises de visualiser leur impact et d'adopter des stratégies d'amélioration efficaces. Un véritable levier pour devenir un leader de l'engagement responsable !
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.card}>
            <Icon name="award" size={30} color="#fff" style={styles.icon} />
            <Text style={styles.cardTitle}>Objectif</Text>
            <Text style={styles.cardDescription}>
              L'objectif de Clash of RSE est de permettre aux entreprises de mesurer, classer et optimiser leur score RSE, en suivant l'engagement de chaque collaborateur pour favoriser une compétitivité responsable et durable.
            </Text>
          </View>

          <View style={styles.card}>
            <Icon name="retweet" size={30} color="#fff" style={styles.icon} />
            <Text style={styles.cardTitle}>Engagement</Text>
            <Text style={styles.cardDescription}>
              L'engagement dans Clash of RSE concerne la participation des collaborateurs aux initiatives responsables de l'entreprise, comme la réduction de l'empreinte écologique et la promotion de pratiques durables.
            </Text>
          </View>

          <View style={styles.card}>
            <Icon name="fingerprint" size={30} color="#fff" style={styles.icon} />
            <Text style={styles.cardTitle}>QR Code</Text>
            <Text style={styles.cardDescription}>
              Le QR code permettra de scanner les produits de consommation pour obtenir des informations sur leur impact environnemental et social, favorisant des choix responsables.
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  header: {
    position: 'relative',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  container: {
    position: 'absolute',
    top: '30%',
    left: 16,
    right: 16,
    textAlign: 'center',
  },
  textContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#d1d5db',
    marginTop: 10,
  },
  section: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#f97316',
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1f2937',
  },
  cardDescription: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
  },
});
