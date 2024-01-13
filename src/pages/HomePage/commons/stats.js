import React from 'react';

import {ScrollView} from 'react-native';
import Footer from '../../../commons/footer/footer';
import StatsItem from './statsItem';

const Stats = ({stats,terms}) => {
  return (
    <ScrollView>
      <StatsItem
        statsAll={stats?.data.stats.personnel_units}
        statsDay={stats?.data.increase.personnel_units}
        terms={terms?.data.personnel_units}
      />
      <StatsItem
        statsAll={stats?.data.stats.tanks}
        statsDay={stats?.data.increase.tanks}
        terms={terms?.data.tanks}
      />
      <StatsItem
        statsAll={stats?.data.stats.armoured_fighting_vehicles}
        statsDay={stats?.data.increase.armoured_fighting_vehicles}
        terms={terms?.data.armoured_fighting_vehicles}
      />
      <StatsItem
        statsAll={stats?.data.stats.artillery_systems}
        statsDay={stats?.data.increase.artillery_systems}
        terms={terms?.data.artillery_systems}
      />
      <StatsItem
        statsAll={stats?.data.stats.mlrs}
        statsDay={stats?.data.increase.mlrs}
        terms={terms?.data.mlrs}
      />
      <StatsItem
        statsAll={stats?.data.stats.aa_warfare_systems}
        statsDay={stats?.data.increase.aa_warfare_systems}
        terms={terms?.data.aa_warfare_systems}
      />
      <StatsItem
        statsAll={stats?.data.stats.planes}
        statsDay={stats?.data.increase.planes}
        terms={terms?.data.planes}
      />
      <StatsItem
        statsAll={stats?.data.stats.helicopters}
        statsDay={stats?.data.increase.helicopters}
        terms={terms?.data.helicopters}
      />
      <StatsItem
        statsAll={stats?.data.stats.vehicles_fuel_tanks}
        statsDay={stats?.data.increase.vehicles_fuel_tanks}
        terms={terms?.data.vehicles_fuel_tanks}
      />
      <StatsItem
        statsAll={stats?.data.stats.warships_cutters}
        statsDay={stats?.data.increase.warships_cutters}
        terms={terms?.data.warships_cutters}
      />
      <StatsItem
        statsAll={stats?.data.stats.cruise_missiles}
        statsDay={stats?.data.increase.cruise_missiles}
        terms={terms?.data.cruise_missiles}
      />
      <StatsItem
        statsAll={stats?.data.stats.uav_systems}
        statsDay={stats?.data.increase.uav_systems}
        terms={terms?.data.uav_systems}
      />
      <StatsItem
        statsAll={stats?.data.stats.special_military_equip}
        statsDay={stats?.data.increase.special_military_equip}
        terms={terms?.data.special_military_equip}
      />
      <StatsItem
        statsAll={stats?.data.stats.submarines}
        statsDay={stats?.data.increase.submarines}
        terms={terms?.data.submarines}
      />
      <StatsItem
        statsAll={stats?.data.stats.atgm_srbm_systems}
        statsDay={stats?.data.increase.atgm_srbm_systems}
        terms={terms?.data.atgm_srbm_systems}
      />
      <Footer />
    </ScrollView>

  );
};

export default Stats;
