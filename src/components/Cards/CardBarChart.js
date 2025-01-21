import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

// Get the width of the screen for responsiveness
const screenWidth = Dimensions.get("window").width;

export default function CardBarChart() {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [30, 78, 56, 34, 100, 45, 13],
        color: (opacity = 1) => `rgba(237, 100, 166, ${opacity})`, // Pink color
        barThickness: 8,
      },
      {
        data: [27, 68, 86, 74, 10, 4, 87],
        color: (opacity = 1) => `rgba(76, 81, 191, ${opacity})`, // Blue color
        barThickness: 8,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for text
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black labels
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
          <Text style={styles.title}>Total orders</Text>
          <Text style={styles.subtitle}>Performance</Text>
        </View>
        <View style={styles.chartContainer}>
          <BarChart
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
