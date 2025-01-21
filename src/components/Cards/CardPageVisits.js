import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function CardPageVisits() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>Page visits</Text>
          </View>
          <View style={styles.headerButton}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>Page name</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>Visitors</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>Unique users</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>Bounce rate</Text>
            </View>
          </View>

          {/* Table Body */}
          <View style={styles.tableBody}>
            {tableData.map((data, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellText}>{data.pageName}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellText}>{data.visitors}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellText}>{data.uniqueUsers}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellText}>
                    {data.isUp ? (
                      <Text style={styles.arrowUp}>{data.bounceRate}</Text>
                    ) : (
                      <Text style={styles.arrowDown}>{data.bounceRate}</Text>
                    )}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Sample data
const tableData = [
  { pageName: "/argon/", visitors: "4,569", uniqueUsers: "340", bounceRate: "46.53%", isUp: true },
  { pageName: "/argon/index.html", visitors: "3,985", uniqueUsers: "319", bounceRate: "46.53%", isUp: false },
  { pageName: "/argon/charts.html", visitors: "3,513", uniqueUsers: "294", bounceRate: "36.49%", isUp: false },
  { pageName: "/argon/tables.html", visitors: "2,050", uniqueUsers: "147", bounceRate: "50.87%", isUp: true },
  { pageName: "/argon/profile.html", visitors: "1,795", uniqueUsers: "190", bounceRate: "46.53%", isUp: false },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  card: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4a5568",
  },
  headerButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#4c51bf",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  tableContainer: {
    marginTop: 16,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#edf2f7",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  tableCell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4a5568",
    textTransform: "uppercase",
  },
  tableBody: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  tableCellText: {
    fontSize: 14,
    color: "#4a5568",
  },
  arrowUp: {
    color: "#38a169",
  },
  arrowDown: {
    color: "#e53e3e",
  },
});
