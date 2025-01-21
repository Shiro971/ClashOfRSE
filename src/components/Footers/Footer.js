import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Importing FontAwesome icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Function to open links
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.footerContainer}>
      {/* SVG shape effect (optional) */}
      <View style={styles.shapeEffect}></View>

      <View style={styles.contentContainer}>
        <View style={styles.contactSection}>
          <Text style={styles.header}>Let's keep in touch!</Text>
          <Text style={styles.subHeader}>
            Find us on any of these platforms, we respond in 1-2 business days.
          </Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => openLink("https://twitter.com")}
            >
              <FontAwesome name="twitter" size={20} color="#1DA1F2" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => openLink("https://facebook.com")}
            >
              <FontAwesome name="facebook-square" size={20} color="#4267B2" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => openLink("https://dribbble.com")}
            >
              <FontAwesome name="dribbble" size={20} color="#EA4C89" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => openLink("https://github.com")}
            >
              <FontAwesome name="github" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.linksSection}>
          <View style={styles.linksColumn}>
            <Text style={styles.sectionHeader}>Useful Links</Text>
            <TouchableOpacity onPress={() => openLink("https://aboutus.com")}>
              <Text style={styles.linkText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://blog.com")}>
              <Text style={styles.linkText}>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://github.com")}>
              <Text style={styles.linkText}>Github</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://freeproducts.com")}>
              <Text style={styles.linkText}>Free Products</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linksColumn}>
            <Text style={styles.sectionHeader}>Other Resources</Text>
            <TouchableOpacity onPress={() => openLink("https://license.com")}>
              <Text style={styles.linkText}>MIT License</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://terms.com")}>
              <Text style={styles.linkText}>Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://privacy.com")}>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://contactus.com")}>
              <Text style={styles.linkText}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footerBottom}>
        <Text style={styles.copyrightText}>
          Copyright © {currentYear} Notus React by{" "}
          <Text
            style={styles.link}
            onPress={() => openLink("https://creative-tim.com")}
          >
            Creative Tim
          </Text>
          .
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#edf2f7",
    paddingTop: 40,
    paddingBottom: 40,
  },
  shapeEffect: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 40,
    backgroundColor: "#edf2f7",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentContainer: {
    marginHorizontal: 20,
  },
  contactSection: {
    marginBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 16,
    color: "#4A5568",
    textAlign: "center",
    marginTop: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  linksSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linksColumn: {
    width: "45%",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  linkText: {
    fontSize: 14,
    color: "#4A5568",
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  footerBottom: {
    marginTop: 30,
    alignItems: "center",
  },
  copyrightText: {
    fontSize: 14,
    color: "#4A5568",
    textAlign: "center",
  },
  link: {
    color: "#3182ce",
    textDecorationLine: "underline",
  },
});
