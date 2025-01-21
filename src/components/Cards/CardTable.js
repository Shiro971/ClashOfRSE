import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

// components
import TableDropdown from "../Dropdowns/TableDropdown.js"; // You need to ensure this component is compatible with React Native.

const CardTable = ({ color }) => {
  const tableData = [
    {
      project: "Argon Design System",
      budget: "$2,500 USD",
      status: "pending",
      users: [
        require("../../assets/img/team-1-800x800.jpg"),
        require("../../assets/img/team-2-800x800.jpg"),
        require("../../assets/img/team-3-800x800.jpg"),
        require("../../assets/img/team-4-470x470.png"),
      ],
      completion: 60,
    },
    {
      project: "Angular Now UI Kit PRO",
      budget: "$1,800 USD",
      status: "completed",
      users: [
        require("../../assets/img/team-1-800x800.jpg"),
        require("../../assets/img/team-2-800x800.jpg"),
        require("../../assets/img/team-3-800x800.jpg"),
        require("../../assets/img/team-4-470x470.png"),
      ],
      completion: 100,
    },
    // Add other rows here similarly
  ];

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: color === "light" ? "white" : "#2A4365" },
      ]}
    >
      <View style={styles.cardHeader}>
        <Text
          style={[
            styles.cardTitle,
            { color: color === "light" ? "#2D3748" : "white" },
          ]}
        >
          Card Tables
        </Text>
      </View>

      <FlatList
        data={tableData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <View style={styles.projectContainer}>
              <Image source={item.users[0]} style={styles.projectImage} />
              <Text
                style={[
                  styles.projectText,
                  { color: color === "light" ? "#2D3748" : "white" },
                ]}
              >
                {item.project}
              </Text>
            </View>
            <Text style={styles.tableText}>{item.budget}</Text>
            <Text style={styles.tableText}>{item.status}</Text>

            <View style={styles.usersContainer}>
              {item.users.slice(0, 4).map((user, index) => (
                <Image
                  key={index}
                  source={user}
                  style={[
                    styles.userImage,
                    index > 0 ? { marginLeft: -10 } : {},
                  ]}
                />
              ))}
            </View>

            <View style={styles.completionContainer}>
              <Text style={styles.completionText}>{item.completion}%</Text>
              <View style={styles.progressBar}>
                <View
                  style={{
                    ...styles.progressFill,
                    width: `${item.completion}%`,
                  }}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.dropdownButton}>
              <TableDropdown />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    padding: 15,
    marginBottom: 20,
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tableRow: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  projectContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
  projectImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  projectText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  tableText: {
    fontSize: 14,
    flex: 1,
  },
  usersContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  completionContainer: {
    flex: 2,
    alignItems: "center",
  },
  completionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  progressBar: {
    height: 5,
    backgroundColor: "#e2e8f0",
    borderRadius: 3,
    overflow: "hidden",
    marginTop: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#38A169",
  },
  dropdownButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardTable;
