import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

// Get the width of the screen for responsiveness
const screenWidth = Dimensions.get("window").width;

export default function CardLineChart() {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [65, 78, 66, 44, 56, 67, 75],
        color: (opacity = 1) => `rgba(76, 81, 191, ${opacity})`, // Blue color
        strokeWidth: 2,
      },
      {
        data: [40, 68, 86, 74, 56, 60, 87],
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White color
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#1E2923",
    backgroundGradientFrom: "#08130D",
    backgroundGradientTo: "#1E2923",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White text
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White labels
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Sales value</Text>
          <Text style={styles.subtitle}>Overview</Text>
        </View>
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={screenWidth - 32} // Make the chart responsive
            height={220}
            chartConfig={chartConfig}
            withVerticalLabels={false} // Optionally remove vertical labels
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#1e3a8a",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
    marginTop: 4,
  },
  chartContainer: {
    padding: 16,
  },
});
