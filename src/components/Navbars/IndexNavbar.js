import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // For icons
import UserDropdown from "../Dropdowns/UserDropdown"; // Assuming this is your custom component

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={styles.container}>
        {/* Brand */}
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.brandText}>Dashboard</Text>
        </TouchableOpacity>

        {/* Search Form */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search here..."
            placeholderTextColor="#A0AEC0"
          />
        </View>

        {/* User Dropdown */}
        <View style={styles.userDropdown}>
          <UserDropdown />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "transparent",
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  brandText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 24,
    paddingHorizontal: 12,
    width: 250,
    marginLeft: "auto",
  },
  searchIcon: {
    color: "#A0AEC0",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    color: "#4A5568",
    backgroundColor: "transparent",
  },
  userDropdown: {
    marginLeft: 16,
  },
});
