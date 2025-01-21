import React from "react";
import { Platform, View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview"; // For WebView rendering on mobile

const MapExample = () => {
  const latitude = 40.748817;
  const longitude = -73.985428;

  // Check the platform and render appropriate map
  return <LeafletMap latitude={latitude} longitude={longitude} />;
};

const LeafletMap = ({ latitude, longitude }) => {
  const mapHtml = `
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <style>
          #map {
            height: 100%;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([${latitude}, ${longitude}], 13);
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          L.marker([${latitude}, ${longitude}]).addTo(map)
            .bindPopup("Notus React!<br>A free Admin for Tailwind CSS, React, and React Hooks.")
            .openPopup();
        </script>
      </body>
    </html>
  `;

  if (Platform.OS === "web") {
    // Render directly on web without WebView
    return (
      <div id="map" style={{ height: "100%", width: "100%" }}></div>
    );
  }

  // For mobile, render using WebView
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: mapHtml }}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapExample;
