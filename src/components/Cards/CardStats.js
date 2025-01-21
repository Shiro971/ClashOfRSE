import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';  // Utilisation des icônes

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={styles.statSubtitle}>{statSubtitle}</Text>
          <Text style={styles.statTitle}>{statTitle}</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={[styles.icon, { backgroundColor: statIconColor }]}>
            <MaterialCommunityIcons name={statIconName} size={24} color="white" />
          </View>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={[styles.percent, { color: statPercentColor }]}>
          {statArrow === 'up' ? '↑' : statArrow === 'down' ? '↓' : ''} {statPercent}%
        </Text>
        <Text style={styles.description}>{statDescripiron}</Text>
      </View>
    </View>
  );
}

CardStats.defaultProps = {
  statSubtitle: 'Traffic',
  statTitle: '350,897',
  statArrow: 'up',
  statPercent: '3.48',
  statPercentColor: 'green',
  statDescripiron: 'Since last month',
  statIconName: 'chart-bar', // Icône par défaut
  statIconColor: 'red',
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(['up', 'down']),
  statPercent: PropTypes.string,
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};

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
  },
  cardContent: {
    flexDirection: 'row',
    padding: 16,
  },
  textContainer: {
    flex: 1,
  },
  statSubtitle: {
    color: '#A0AEC0',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  statTitle: {
    color: '#4A5568',
    fontSize: 24,
    fontWeight: '600',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  percent: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  description: {
    color: '#A0AEC0',
    fontSize: 12,
  },
});
