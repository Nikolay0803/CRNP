import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStatistics} from '../../../axios/statistics';
import {
  addStats,
  setStatsLoading,
  setStatsError,
} from '../../../redux/statsSlice';

const DayInfo = () => {
  const dispatch = useDispatch();
  // const statsData = useSelector(state => state.stats);
  // const {data, loading, error} = statsData || {};

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log('Fetching data...');
  //       dispatch(setStatsLoading());

  //       const response = await fetchStatistics();

  //       console.log('Axios Response:', response);

  //       dispatch(addStats(response.data));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       dispatch(setStatsError(error.message));
  //     }
  //   };

  //   // Перевірте, чи стан пустий або має некоректну структуру перед викликом fetchData
  //   if (!data || !data.records || data.records.length === 0) {
  //     fetchData();
  //   }
  // }, [dispatch, data]); // Видаліть dispatch і data залежності від useEffect

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (error) {
  //   return <Text>Error: {error}</Text>;
  // }

  // // Перевірте, чи data та його властивість records мають очікувану структуру перед використанням
  // if (!data || !data.records || data.records.length === 0) {
  //   return <Text>No data available</Text>;
  // }

  // const {personnel_units, tanks, increase} = data.records[0].stats;

  return (
    <View style={styles.dayInfoBlock}>
      {/* <StatsItemDay
        label="Personnel Units"
        statsAll={personnel_units || 0}
        statsDay={increase.personnel_units || 0}
        terms={{title: 'Особовий склад'}}
      />
      <StatsItemDay
        label="Tanks"
        statsAll={tanks || 0}
        statsDay={increase.tanks || 0}
        terms={{title: 'Танки'}}
      /> */}
      {/* <StatsItemDay
        statsAll={stats.armoured_fighting_vehicles}
        statsDay={stats.increase.armoured_fighting_vehicles}
        terms={terms.data.armoured_fighting_vehicles}
      />
      <StatsItemDay
        statsAll={stats.artillery_systems}
        statsDay={stats.increase.artillery_systems}
        terms={terms.data.artillery_systems}
      />
      <StatsItemDay
        statsAll={stats.mlrs}
        statsDay={stats.increase.mlrs}
        terms={terms.data.mlrs}
      />
      <StatsItemDay
        statsAll={stats.aa_warfare_systems}
        statsDay={stats.increase.aa_warfare_systems}
        terms={terms.data.aa_warfare_systems}
      />
      <StatsItemDay
        statsAll={stats.planes}
        statsDay={stats.increase.planes}
        terms={terms.data.planes}
      />
      <StatsItemDay
        statsAll={stats.helicopters}
        statsDay={stats.increase.helicopters}
        terms={terms.data.helicopters}
      />
      <StatsItemDay
        statsAll={stats.vehicles_fuel_tanks}
        statsDay={stats.increase.vehicles_fuel_tanks}
        terms={terms.data.vehicles_fuel_tanks}
      />
      <StatsItemDay
        statsAll={stats.warships_cutters}
        statsDay={stats.increase.warships_cutters}
        terms={terms.data.warships_cutters}
      />
      <StatsItemDay
        statsAll={stats.cruise_missiles}
        statsDay={stats.increase.cruise_missiles}
        terms={terms.data.cruise_missiles}
      />
      <StatsItemDay
        statsAll={stats.uav_systems}
        statsDay={stats.increase.uav_systems}
        terms={terms.data.uav_systems}
      />
      <StatsItemDay
        statsAll={stats.special_military_equip}
        statsDay={stats.increase.special_military_equip}
        terms={terms.data.special_military_equip}
      />
      <StatsItemDay
        statsAll={stats.submarines}
        statsDay={stats.increase.submarines}
        terms={terms.data.submarines}
      />
      <StatsItemDay
        statsAll={stats.atgm_srbm_systems}
        statsDay={stats.increase.atgm_srbm_systems}
        terms={terms.data.atgm_srbm_systems}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  dayInfoBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
  },
});

export default DayInfo;
