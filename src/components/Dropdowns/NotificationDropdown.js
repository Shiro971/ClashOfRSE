import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotificationDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      {/* Notification bell icon */}
      <TouchableOpacity onPress={toggleDropdown}>
        <Ionicons name="ios-notifications" size={30} color="gray" />
      </TouchableOpacity>

      {/* Dropdown menu */}
      {dropdownVisible && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={dropdownVisible}
          onRequestClose={() => setDropdownVisible(false)}
        >
          <TouchableOpacity style={styles.modalBackground} onPress={() => setDropdownVisible(false)}>
            <View style={styles.dropdown}>
              <ScrollView>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => alert('Action')}>
                  <Text style={styles.dropdownText}>Action</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => alert('Another action')}>
                  <Text style={styles.dropdownText}>Another action</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => alert('Something else')}>
                  <Text style={styles.dropdownText}>Something else here</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.dropdownItem} onPress={() => alert('Separated link')}>
                  <Text style={styles.dropdownText}>Separated link</Text>
                </TouchableOpacity>
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

export default NotificationDropdown;
