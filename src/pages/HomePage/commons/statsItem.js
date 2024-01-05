import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatsItem = ({statsAll, statsDay}) => {
  return (
    <View style={styles.statsBlock}>
      <Text style={styles.statsAll}>{statsAll}</Text>
      <Text style={styles.statsDay}>({statsDay})</Text>
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
  },
//   // statsImage: {
//   //   height: 75,
//   //   width: 85,
//   //   marginRight: 30,
//   //   marginLeft: 10,
//   // },
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
//   // statsText: {
//   //   fontSize: 18,
//   //   color: 'black',
//   // },
//   statsNumbers: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
});

export default StatsItem;
