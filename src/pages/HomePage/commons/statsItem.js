import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItem = ({ statsAll, statsDay, terms }) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri style={styles.statsImage} uri={terms?.icon} />
      <View>
        <View style={styles.statsNumbers}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>({statsDay})</Text>
        </View>
        <Text style={styles.statsText}>{terms?.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    height: 120,
  },
  statsImage: {
    height: 75,
    width: 85,
    marginRight: 30,
    marginLeft: 10,
  },
  statsAll: {
    fontSize: 24,
    fontWeight: '900',
    color: 'black',
  },
  statsDay: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginLeft: 10,
  },
  statsText: {
width: 220,
    fontSize: 18,
    color: 'black',
  },
  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatsItem;
