import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Components
import CardLineChart from "../../components/Cards/CardLineChart";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardPageVisits from "../../components/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic";

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.cardContainer}>
          <CardLineChart />
        </View>
        <View style={styles.cardContainer}>
          <CardBarChart />
        </View>
      </View>
      <View style={[styles.row, styles.mt4]}>
        <View style={styles.cardContainer}>
          <CardPageVisits />
        </View>
        <View style={styles.cardContainer}>
          <CardSocialTraffic />
        </View>
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
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  mt4: {
    marginTop: 16,
  },
  cardContainer: {
    width: "48%",
    marginBottom: 16,
  },
});
