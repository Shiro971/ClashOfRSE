import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Components
import CardTable from "../../components/Cards/CardTable";

export default function Tables() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.cardContainer}>
          <CardTable />
        </View>
        <View style={styles.cardContainer}>
          <CardTable color="dark" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  row: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  cardContainer: {
    width: "100%",
    marginBottom: 16,
  },
});
