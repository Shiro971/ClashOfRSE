import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Components
import CardSettings from "../../components/Cards/CardSettings";
import CardProfile from "../../components/Cards/CardProfile";

export default function Settings() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.cardContainer}>
          <CardSettings />
        </View>
        <View style={styles.cardContainer}>
          <CardProfile />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  cardContainer: {
    width: "48%",
    marginBottom: 16,
  },
});
