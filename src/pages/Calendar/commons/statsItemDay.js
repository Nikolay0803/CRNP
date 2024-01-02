// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {SvgUri} from 'react-native-svg';

// const StatsItemDay = ({ statsAll, statsDay, svgUri, terms }) => {
//   console.log('StatsItem Data:', statsAll, statsDay);

//   return (
//     <View style={styles.statsBlock}>
//       {svgUri && <SvgUri uri={svgUri} style={styles.statsImage} />}
//       <View style={styles.statsInfo}>
//         <View style={styles.statsNumbers}>
//           <Text style={styles.statsAll}>{statsAll}</Text>
//           <Text style={styles.statsDay}>({statsDay})</Text>
//         </View>
//         <Text style={styles.statsText}>{terms && terms.title}</Text>
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  statsBlock: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    width: 120,
    height: 150,
    flex: 1,
  },
  statsImage: {
    height: 10,
    width: 10,
  },
  statsAll: {
    fontSize: 15,
    fontWeight: '900',
    color: 'black',
  },
  statsInfo: {
    flex: 1,
  },
  statsDay: {
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
    marginLeft: 10,
  },
  statsText: {
    fontSize: 12,
    color: 'black',
  },
  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatsItemDay;
