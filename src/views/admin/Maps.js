import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Components
import MapExample from "../../components/Maps/MapExample";

export default function Maps() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.mapContainer}>
        <MapExample />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  mapContainer: {
    width: "100%",
    height: 300,  // Set the height of the map container
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});
