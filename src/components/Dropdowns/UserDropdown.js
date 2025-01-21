import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from "react-native";

const UserDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const toggleDropdown = () => {
    setDropdownPopoverShow(!dropdownPopoverShow);
  };

  return (
    <View style={styles.container}>
      {/* Profile Button */}
      <TouchableOpacity onPress={toggleDropdown} style={styles.profileButton}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={require("../../assets/img/team-1-800x800.jpg")} // Use your image
            style={styles.profileImage}
          />
        </View>
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
              <View style={styles.separator} />
              <TouchableOpacity style={styles.dropdownItem} onPress={() => alert("Separated link clicked")}>
                <Text style={styles.dropdownText}>Separated link</Text>
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
  profileButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  profileImageWrapper: {
    width: 48,
    height: 48,
    backgroundColor: "#A0AEC0", // Equivalent to bg-blueGray-200
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
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
  separator: {
    height: 1,
    backgroundColor: "#E2E8F0", // Equivalent to border-blueGray-100
    marginVertical: 10,
  },
});

export default UserDropdown;
