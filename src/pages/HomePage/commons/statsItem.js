import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

// ...
const StatsItem = ({statsAll, statsDay}) => {
  console.log('statsAll:', statsAll, 'statsDay:', statsDay);

  return (
    <View style={styles.statsBlock}>
      <View>
        <View style={styles.statsNumbers}>
          <Text style={styles.statsAll}>{String(statsAll)}</Text>
          {statsDay !== undefined && (
            <Text style={styles.statsDay}>({String(statsDay)})</Text>
          )}
        </View>
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
  },
  // statsImage: {
  //   height: 75,
  //   width: 85,
  //   marginRight: 30,
  //   marginLeft: 10,
  // },
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
  // statsText: {
  //   fontSize: 18,
  //   color: 'black',
  // },
  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatsItem;
