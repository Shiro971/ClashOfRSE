import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function CardProfile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/img/team-2-800x800.jpg")}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.statsContainer}>
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

        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Jenna Stones</Text>
          <Text style={styles.profileLocation}>Los Angeles, California</Text>
          <Text style={styles.profileJob}>Solution Manager - Creative Tim Officer</Text>
          <Text style={styles.profileSchool}>University of Computer Science</Text>
        </View>

        <View style={styles.bioContainer}>
          <Text style={styles.bioText}>
            An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.showMore}>Show more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  card: {
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 16,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -64,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  stat: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4a5568",
  },
  statLabel: {
    fontSize: 12,
    color: "#a0aec0",
  },
  profileInfo: {
    alignItems: "center",
    marginTop: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4a5568",
  },
  profileLocation: {
    fontSize: 14,
    color: "#718096",
    marginTop: 4,
  },
  profileJob: {
    fontSize: 14,
    color: "#4a5568",
    marginTop: 10,
  },
  profileSchool: {
    fontSize: 14,
    color: "#4a5568",
  },
  bioContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
    textAlign: "center",
  },
  bioText: {
    fontSize: 16,
    color: "#4a5568",
    lineHeight: 24,
    marginBottom: 16,
  },
  showMore: {
    fontSize: 16,
    color: "#63b3ed",
  },
});
