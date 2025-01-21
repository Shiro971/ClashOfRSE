import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbars/AuthNavbar"; // Make sure to adapt the Navbar for React Native
import Footer from "../components/Footers/Footer"; // Make sure to adapt the Footer for React Native

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <View style={styles.profilePage}>
        <View style={styles.coverImageWrapper}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80' }}
            style={styles.coverImage}
          />
          <View style={styles.overlay}></View>
        </View>
        <View style={styles.profileCard}>
          <View style={styles.profilePictureWrapper}>
            <Image
              source={require("../assets/img/team-2-800x800.jpg")}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Jenna Stones</Text>
            <Text style={styles.location}>Los Angeles, California</Text>
            <Text style={styles.jobTitle}>
              Solution Manager - Creative Tim Officer
            </Text>
            <Text style={styles.education}>
              University of Computer Science
            </Text>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>22</Text>
                <Text style={styles.statLabel}>Friends</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>10</Text>
                <Text style={styles.statLabel}>Photos</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>89</Text>
                <Text style={styles.statLabel}>Comments</Text>
              </View>
            </View>
            <Button title="Connect" onPress={() => {}} />
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.aboutText}>
            An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.showMore}>Show more</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  profilePage: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  coverImageWrapper: {
    height: 500,
    position: "relative",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  profileCard: {
    marginTop: -64,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    padding: 16,
  },
  profilePictureWrapper: {
    position: "absolute",
    top: -64,
    left: "50%",
    transform: [{ translateX: -75 }],
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#fff",
  },
  profileInfo: {
    marginTop: 64,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#343a40",
  },
  location: {
    fontSize: 14,
    color: "#868e96",
    marginTop: 4,
  },
  jobTitle: {
    fontSize: 16,
    color: "#343a40",
    marginTop: 4,
  },
  education: {
    fontSize: 14,
    color: "#343a40",
    marginTop: 4,
  },
  stats: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "center",
  },
  stat: {
    alignItems: "center",
    marginHorizontal: 16,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#343a40",
  },
  statLabel: {
    fontSize: 12,
    color: "#868e96",
  },
  about: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  aboutText: {
    fontSize: 16,
    color: "#343a40",
    lineHeight: 24,
  },
  showMore: {
    color: "#007bff",
    fontSize: 16,
    marginTop: 8,
  },
});
