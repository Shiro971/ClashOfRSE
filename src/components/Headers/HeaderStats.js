import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Use Expo's vector icons

// Reusable Stats Card component
const CardStats = ({ 
  statSubtitle, 
  statTitle, 
  statArrow, 
  statPercent, 
  statPercentColor, 
  statDescription, 
  statIconName, 
  statIconColor 
}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.cardHeader, { backgroundColor: statIconColor }]}>
        <FontAwesome5 name={statIconName} size={24} color="white" />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.statSubtitle}>{statSubtitle}</Text>
        <Text style={styles.statTitle}>{statTitle}</Text>
        <View style={styles.statFooter}>
          <Text style={[styles.statPercent, { color: statPercentColor }]}>
            {statPercent}%
          </Text>
          <Text style={styles.statDescription}>{statDescription}</Text>
        </View>
      </View>
    </View>
  );
};

export default function HeaderStats() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Header</Text>
      <View style={styles.statsContainer}>
        <CardStats
          statSubtitle="TRAFFIC"
          statTitle="350,897"
          statArrow="up"
          statPercent="3.48"
          statPercentColor="green"
          statDescription="Since last month"
          statIconName="chart-line"
          statIconColor="red"
        />
        <CardStats
          statSubtitle="NEW USERS"
          statTitle="2,356"
          statArrow="down"
          statPercent="3.48"
          statPercentColor="red"
          statDescription="Since last week"
          statIconName="chart-pie"
          statIconColor="orange"
        />
        <CardStats
          statSubtitle="SALES"
          statTitle="924"
          statArrow="down"
          statPercent="1.10"
          statPercentColor="orange"
          statDescription="Since yesterday"
          statIconName="user"
          statIconColor="pink"
        />
        <CardStats
          statSubtitle="PERFORMANCE"
          statTitle="49.65%"
          statArrow="up"
          statPercent="12"
          statPercentColor="green"
          statDescription="Since last month"
          statIconName="percent"
          statIconColor="lightblue"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue", // Background color for the whole container
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },
  cardHeader: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  statSubtitle: {
    fontSize: 14,
    color: "#999",
  },
  statTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  statFooter: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statPercent: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statDescription: {
    fontSize: 12,
    color: "#666",
  },
});
