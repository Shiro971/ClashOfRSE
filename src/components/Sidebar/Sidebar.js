import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation
import { MaterialIcons } from "@expo/vector-icons"; // For icons

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState(false);
  const navigation = useNavigation();

  const isActive = (path) => {
    // Use current path or route name from navigation
    const currentPath = navigation.getState().routes[navigation.getState().index].name;
    return currentPath.includes(path) ? styles.activeLink : styles.inactiveLink;
  };

  return (
    <View style={styles.sidebar}>
      {/* Toggler */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setCollapseShow(!collapseShow)}
      >
        <MaterialIcons name="menu" size={30} color="black" />
      </TouchableOpacity>

      {/* Brand */}
      <Text style={styles.brand} onPress={() => navigation.navigate("Home")}>
        Notus React
      </Text>

      {/* Collapse Menu */}
      {collapseShow && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <MaterialIcons name="dashboard" size={20} color="gray" />
            <Text style={[styles.menuItemText, isActive("Dashboard")]}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Settings")}
          >
            <MaterialIcons name="settings" size={20} color="gray" />
            <Text style={[styles.menuItemText, isActive("Settings")]}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Tables")}
          >
            <MaterialIcons name="table" size={20} color="gray" />
            <Text style={[styles.menuItemText, isActive("Tables")]}>Tables</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Maps")}
          >
            <MaterialIcons name="map" size={20} color="gray" />
            <Text style={[styles.menuItemText, isActive("Maps")]}>Maps</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    backgroundColor: "white",
    padding: 10,
    zIndex: 10,
  },
  toggleButton: {
    backgroundColor: "transparent",
    padding: 10,
    marginBottom: 20,
  },
  brand: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#2D3748",
    marginBottom: 20,
    paddingLeft: 10,
  },
  menu: {
    flex: 1,
    justifyContent: "flex-start",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  menuItemText: {
    fontSize: 14,
    marginLeft: 10,
    textTransform: "uppercase",
  },
  activeLink: {
    color: "#4299E1", // light blue active color
  },
  inactiveLink: {
    color: "#4A5568", // gray inactive color
  },
});
