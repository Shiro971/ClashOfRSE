import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function FooterSmall(props) {
  const currentYear = new Date().getFullYear();

  // Function to open links
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View
      style={[
        styles.footerContainer,
        props.absolute && styles.footerAbsolute
      ]}
    >
      <View style={styles.separator}></View>

      <View style={styles.contentContainer}>
        {/* Copyright Section */}
        <View style={styles.copyrightSection}>
          <Text style={styles.copyrightText}>
            Copyright © {currentYear}{" "}
            <TouchableOpacity onPress={() => openLink("https://www.creative-tim.com?ref=nr-footer-small")}>
              <Text style={styles.linkText}>Creative Tim</Text>
            </TouchableOpacity>
          </Text>
        </View>

        {/* Links Section */}
        <View style={styles.linksSection}>
          <TouchableOpacity onPress={() => openLink("https://www.creative-tim.com?ref=nr-footer-small")}>
            <Text style={styles.linkItem}>Creative Tim</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://www.creative-tim.com/presentation?ref=nr-footer-small")}>
            <Text style={styles.linkItem}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("http://blog.creative-tim.com?ref=nr-footer-small")}>
            <Text style={styles.linkItem}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer-small")}>
            <Text style={styles.linkItem}>MIT License</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 20,
    backgroundColor: "#2d3748", // Blue-gray background
  },
  footerAbsolute: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#4a5568", // Gray separator
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
    color: "#e2e8f0", // Light text color
    textAlign: "center",
  },
  linkText: {
    color: "#fff", // White link color
    textDecorationLine: "underline",
  },
  linksSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  linkItem: {
    fontSize: 14,
    color: "#e2e8f0", // Light text color
    marginBottom: 10,
    textDecorationLine: "underline",
    marginHorizontal: 5,
  },
});
