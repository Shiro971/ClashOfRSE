import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  // Utilisation des icônes

export default function CardSocialTraffic() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Social traffic</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="See all"
            onPress={() => {}}
            color="#4C51BF"  // Couleur du bouton
          />
        </View>
      </View>

      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Referral</Text>
            <Text style={styles.tableHeaderText}>Visitors</Text>
            <Text style={styles.tableHeaderText}>Progress</Text>
          </View>

          {/* Première ligne */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Facebook</Text>
            <Text style={styles.tableCell}>1,480</Text>
            <View style={styles.tableCell}>
              <Text style={styles.percentText}>60%</Text>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBar, { width: '60%' }]} />
              </View>
            </View>
          </View>

          {/* Deuxième ligne */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Facebook</Text>
            <Text style={styles.tableCell}>5,480</Text>
            <View style={styles.tableCell}>
              <Text style={styles.percentText}>70%</Text>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBar, { width: '70%' }]} />
              </View>
            </View>
          </View>

          {/* Troisième ligne */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Google</Text>
            <Text style={styles.tableCell}>4,807</Text>
            <View style={styles.tableCell}>
              <Text style={styles.percentText}>80%</Text>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBar, { width: '80%' }]} />
              </View>
            </View>
          </View>

          {/* Quatrième ligne */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Instagram</Text>
            <Text style={styles.tableCell}>3,678</Text>
            <View style={styles.tableCell}>
              <Text style={styles.percentText}>75%</Text>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBar, { width: '75%' }]} />
              </View>
            </View>
          </View>

          {/* Cinquième ligne */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Twitter</Text>
            <Text style={styles.tableCell}>2,645</Text>
            <View style={styles.tableCell}>
              <Text style={styles.percentText}>30%</Text>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBar, { width: '30%' }]} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A5568',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  table: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#F7FAFC',
    paddingVertical: 8,
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#A0AEC0',
    flex: 1,
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  tableCell: {
    flex: 1,
    justifyContent: 'center',
  },
  percentText: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4C51BF', // Couleur de la barre de progression
    borderRadius: 4,
  },
});
