import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function FooterAdmin() {
  const currentYear = new Date().getFullYear();

  // Function to open links
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.separator}></View>

      <View style={styles.contentContainer}>
        {/* Copyright Section */}
        <View style={styles.copyrightSection}>
          <Text style={styles.copyrightText}>
            Copyright © {currentYear}{" "}
            <TouchableOpacity onPress={() => openLink("https://www.creative-tim.com?ref=nr-footer-admin")}>
              <Text style={styles.linkText}>Creative Tim</Text>
            </TouchableOpacity>
          </Text>
        </View>

        {/* Links Section */}
        <View style={styles.linksSection}>
          <View style={styles.linksColumn}>
            <TouchableOpacity onPress={() => openLink("https://www.creative-tim.com?ref=nr-footer-admin")}>
              <Text style={styles.linkItem}>Creative Tim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://www.creative-tim.com/presentation?ref=nr-footer-admin")}>
              <Text style={styles.linkItem}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("http://blog.creative-tim.com?ref=nr-footer-admin")}>
              <Text style={styles.linkItem}>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer-admin")}>
              <Text style={styles.linkItem}>MIT License</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 20,
    backgroundColor: "#f7fafc", // Light gray background
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#e2e8f0", // Light gray color
    marginBottom: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  copyrightSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  copyrightText: {
    fontSize: 14,
    color: "#4A5568", // Dark gray text color
    textAlign: "center",
  },
  linkText: {
    color: "#3182ce", // Blue link color
    textDecorationLine: "underline",
  },
  linksSection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  linksColumn: {
    flexDirection: "column",
    alignItems: "center",
  },
  linkItem: {
    fontSize: 14,
    color: "#4A5568", // Dark gray color
    marginBottom: 10,
    textDecorationLine: "underline",
  },
});
