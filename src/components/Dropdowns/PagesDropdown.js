import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PagesDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const toggleDropdown = () => {
    setDropdownPopoverShow(!dropdownPopoverShow);
  };

  return (
    <View style={styles.container}>
      {/* Button to open dropdown */}
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={styles.buttonText}>Compte</Text>
      </TouchableOpacity>

      {/* Dropdown menu */}
      {dropdownPopoverShow && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={dropdownPopoverShow}
          onRequestClose={() => setDropdownPopoverShow(false)}
        >
          <TouchableOpacity style={styles.modalBackground} onPress={() => setDropdownPopoverShow(false)}>
            <View style={styles.dropdown}>
              <ScrollView>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => alert("Se connecter")}>
                  <Text style={styles.dropdownText}>Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => alert("S'inscrire")}>
                  <Text style={styles.dropdownText}>S'inscrire</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  dropdownButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#4A90E2", // Customize as needed
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  dropdown: {
    backgroundColor: "white",
    width: 200,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: "#555",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
});

export default PagesDropdown;
