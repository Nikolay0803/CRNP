import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Footer from '../../../commons/footer/footer';
import axios from 'axios';
import {
  addStats,
  setStatsError,
  setStatsLoading,
} from '../../../redux/statsSlice';
import StatsItem from './statsItem';

const Stats = () => {
  const dispatch = useDispatch();
  const statsData = useSelector(state => state.stats) || {};
  const {data: stats = {}, loading, error} = statsData;

  const fetchData = async () => {
    dispatch(setStatsLoading());
    try {
      const response = await axios.get(
        'https://russianwarship.rip/api/v2/statistics',
      );
      const responseData = response.data;

      if (responseData && responseData.data && responseData.data.records) {
        dispatch(addStats(responseData.data));
      } else {
        console.error('Invalid response structure:', response);
        dispatch(setStatsError('Invalid response structure'));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch(setStatsError('Failed to fetch statistics'));
    }
  };

  useEffect(() => {
    if (!statsData || !statsData.data || !statsData.data.records) {
      fetchData();
    }
  }, [statsData]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Помилка: {error}</Text>;
  }

  const records = stats && stats.records ? stats.records : [];

  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  const todayRecords = records.filter(record => record.date === todayString);

  return (
    <ScrollView>
      {/* Виведіть StatsItem для кожного запису */}
      {todayRecords.map(record => (
        <React.Fragment key={`${record.date}-tanks`}>
          <StatsItem statsAll={record.stats} statsDay={record.increase} />
        </React.Fragment>
      ))}
      {/* <StatsItem
        title="Armoured Fighting Vehicles"
        statsAll={record.stats.armoured_fighting_vehicles}
        statsDay={increase.data.armoured_fighting_vehicles}
        terms={terms.data.armoured_fighting_vehicles}
      /> */}
      {/* <StatsItem
        statsAll={stats.armoured_fighting_vehicles}
        statsDay={increase.armoured_fighting_vehicles}
        terms={terms.data.armoured_fighting_vehicles}
      />
      <StatsItem
        statsAll={stats.artillery_systems}
        statsDay={increase.artillery_systems}
        terms={terms.data.artillery_systems}
      />
      <StatsItem
        statsAll={stats.mlrs}
        statsDay={increase.mlrs}
        terms={terms.data.mlrs}
      />
      <StatsItem
        statsAll={stats.aa_warfare_systems}
        statsDay={increase.aa_warfare_systems}
        terms={terms.data.aa_warfare_systems}
      />
      <StatsItem
        statsAll={stats.planes}
        statsDay={increase.planes}
        terms={terms.data.planes}
      />
      <StatsItem
        statsAll={stats.helicopters}
        statsDay={increase.helicopters}
        terms={terms.data.helicopters}
      />
      <StatsItem
        statsAll={stats.vehicles_fuel_tanks}
        statsDay={increase.vehicles_fuel_tanks}
        terms={terms.data.vehicles_fuel_tanks}
      />
      <StatsItem
        statsAll={stats.warships_cutters}
        statsDay={increase.warships_cutters}
        terms={terms.data.warships_cutters}
      />
      <StatsItem
        statsAll={stats.cruise_missiles}
        statsDay={increase.cruise_missiles}
        terms={terms.data.cruise_missiles}
      />
      <StatsItem
        statsAll={stats.uav_systems}
        statsDay={increase.uav_systems}
        terms={terms.data.uav_systems}
      />
      <StatsItem
        statsAll={stats.special_military_equip}
        statsDay={increase.special_military_equip}
        terms={terms.data.special_military_equip}
      />
      <StatsItem
        statsAll={stats.submarines}
        statsDay={increase.submarines}
        terms={terms.data.submarines}
      />
      <StatsItem
        statsAll={stats.atgm_srbm_systems}
        statsDay={increase.atgm_srbm_systems}
        terms={terms.data.atgm_srbm_systems}
      /> */}
      <Footer />
    </ScrollView>
  );
};

export default Stats;
