import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, Icon } from "react-native"; // Add Icon from a library like react-native-vector-icons if needed

const NotificationDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const toggleDropdown = () => {
    setDropdownPopoverShow(!dropdownPopoverShow);
  };

  return (
    <View style={styles.container}>
      {/* Notification Button */}
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.icon}>...</Text> {/* You can replace with an Icon component if needed */}
      </TouchableOpacity>

      {/* Dropdown Modal */}
      {dropdownPopoverShow && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={dropdownPopoverShow}
          onRequestClose={() => setDropdownPopoverShow(false)}
        >
          <TouchableOpacity style={styles.modalBackground} onPress={() => setDropdownPopoverShow(false)}>
            <View style={styles.dropdown}>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => alert("Action clicked")}>
                <Text style={styles.dropdownText}>Action</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => alert("Another action clicked")}>
                <Text style={styles.dropdownText}>Another action</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => alert("Something else clicked")}>
                <Text style={styles.dropdownText}>Something else here</Text>
              </TouchableOpacity>
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
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    fontSize: 24, // Adjust the size as needed
    color: "#4A5568", // Equivalent to text-blueGray-500
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
    color: "#4A5568", // Equivalent to text-blueGray-700
  },
});

export default NotificationDropdown;
