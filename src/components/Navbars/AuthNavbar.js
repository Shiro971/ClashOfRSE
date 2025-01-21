import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import PagesDropdown from "../Dropdowns/PagesDropdown"; // Assuming this is a custom component

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigation = useNavigation(); // Hook for navigation

  return (
    <>
      <View style={styles.navbar}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.logoText}>ClashOfRSE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => setNavbarOpen(!navbarOpen)}
            >
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
          </View>

          {navbarOpen && (
            <View style={styles.menu}>
              <View style={styles.dropdownContainer}>
                <PagesDropdown />
              </View>

              <View style={styles.downloadButtonContainer}>
                <Button
                  title="Download"
                  onPress={() => {
                    // Add your download functionality here
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { height: 2 },
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginRight: 16,
  },
  menuButton: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  menuIcon: {
    fontSize: 30,
    color: "white",
  },
  menu: {
    position: "absolute",
    top: 50,
    right: 0,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 250,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { height: 2 },
  },
  dropdownContainer: {
    marginBottom: 10,
  },
  downloadButtonContainer: {
    marginTop: 10,
  },
});
