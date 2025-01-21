import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // If you're using React Navigation

const IndexDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const navigation = useNavigation();

  const openDropdownPopover = () => setDropdownPopoverShow(true);
  const closeDropdownPopover = () => setDropdownPopoverShow(false);

  return (
    <>
      {/* Dropdown button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <Text style={styles.buttonText}>Compte</Text>
      </TouchableOpacity>

      {/* Dropdown Menu */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={dropdownPopoverShow}
        onRequestClose={closeDropdownPopover}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.dropdownMenu}>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                navigation.navigate("Login"); // Use React Navigation for internal routes
                closeDropdownPopover();
              }}
            >
              <Text style={styles.menuText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                navigation.navigate("Register"); // Use React Navigation for internal routes
                closeDropdownPopover();
              }}
            >
              <Text style={styles.menuText}>S'inscrire</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
  },
  buttonText: {
    color: "#4a5568", // Gray color
    fontSize: 14,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent background for modal
  },
  dropdownMenu: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  dropdownItem: {
    paddingVertical: 8,
  },
  menuText: {
    fontSize: 14,
    color: "#4a5568", // Gray color
  },
  separator: {
    height: 1,
    backgroundColor: "#e2e8f0", // Light gray separator
    marginVertical: 10,
  },
});

export default IndexDropdown;
