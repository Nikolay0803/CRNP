import React from 'react';
import {View, StyleSheet} from 'react-native';
import StatsItemDay from './statsItemDay';

const DayInfo = ({ stats, terms }) => {
  return (
    <View style={styles.dayInfoBlock}>
      <View style={styles.dayInfo}>
        <StatsItemDay
          statsAll={stats?.data?.stats.personnel_units}
          statsDay={stats?.data?.increase.personnel_units}
          terms={terms?.data?.personnel_units}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.tanks}
          statsDay={stats?.data?.increase.tanks}
          terms={terms?.data?.tanks}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.armoured_fighting_vehicles}
          statsDay={stats?.data?.increase.armoured_fighting_vehicles}
          terms={terms?.data?.armoured_fighting_vehicles}
        />
        <StatsItemDay
          statsAll={stats?.stats?.artillery_systems}
          statsDay={stats?.data?.increase.artillery_systems}
          terms={terms?.data?.artillery_systems}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.mlrs}
          statsDay={stats?.data?.increase.mlrs}
          terms={terms?.data?.mlrs}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.aa_warfare_systems}
          statsDay={stats?.data?.increase.aa_warfare_systems}
          terms={terms?.data?.aa_warfare_systems}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.planes}
          statsDay={stats?.data?.increase.planes}
          terms={terms?.data?.planes}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.helicopters}
          statsDay={stats?.data?.increase.helicopters}
          terms={terms?.data?.helicopters}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.vehicles_fuel_tanks}
          statsDay={stats?.data?.increase.vehicles_fuel_tanks}
          terms={terms?.data?.vehicles_fuel_tanks}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.warships_cutters}
          statsDay={stats?.data?.increase.warships_cutters}
          terms={terms?.data?.warships_cutters}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.cruise_missiles}
          statsDay={stats?.data?.increase.cruise_missiles}
          terms={terms?.data?.cruise_missiles}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.uav_systems}
          statsDay={stats?.data?.increase.uav_systems}
          terms={terms?.data?.uav_systems}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.special_military_equip}
          statsDay={stats?.data?.increase.special_military_equip}
          terms={terms?.data?.special_military_equip}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.submarines}
          statsDay={stats?.data?.increase.submarines}
          terms={terms?.data?.submarines}
        />
        <StatsItemDay
          statsAll={stats?.data?.stats.atgm_srbm_systems}
          statsDay={stats?.data?.increase.atgm_srbm_systems}
          terms={terms?.data?.atgm_srbm_systems}
        />
      </View>
    </View>
  );
};

  const styles = StyleSheet.create({
    dayInfoBlock: {
      display: "flex",    
    },
    dayInfo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

export default DayInfo;
