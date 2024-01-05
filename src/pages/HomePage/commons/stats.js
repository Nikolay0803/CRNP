import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import Footer from '../../../commons/footer/footer';
import StatsItem from './statsItem';
import {fetchTerms} from '../../../axios/terms';
import {fetchStatistics} from '../../../axios/statistics';

const Stats = () => {
  const dispatch = useDispatch();
  const stats = useSelector(state => state.stats);
  const terms = useSelector(state => state.terms);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsResponse, termsResponse] = await Promise.all([
          dispatch(fetchStatistics()),
          dispatch(fetchTerms()),
        ]);

        const statsResult = statsResponse.payload;
        const termsResult = termsResponse.payload;

        console.log('Stats Data:', statsResult);
        console.log('Terms Data:', termsResult);

        // Решта коду...
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log('sф', statsResult);
  console.log(termsResult);

  return (
    <ScrollView>
          <StatsItem
            terms={terms.data.armoured_fighting_vehicles}
            statsAll={stats.data.stats.tanks}
            statsDay={statsData.data.increase.tanks}
          />

      {/* <StatsItem
  //       statsAll={stats.armoured_fighting_vehicles}
  //       statsDay={increase.armoured_fighting_vehicles}
  //       terms={terms.data.armoured_fighting_vehicles}
  //     />
  //     <StatsItem
  //       statsAll={stats.artillery_systems}
  //       statsDay={increase.artillery_systems}
  //       terms={terms.data.artillery_systems}
  //     />
  //     <StatsItem
  //       statsAll={stats.mlrs}
  //       statsDay={increase.mlrs}
  //       terms={terms.data.mlrs}
  //     />
  //     <StatsItem
  //       statsAll={stats.aa_warfare_systems}
  //       statsDay={increase.aa_warfare_systems}
  //       terms={terms.data.aa_warfare_systems}
  //     />
  //     <StatsItem
  //       statsAll={stats.planes}
  //       statsDay={increase.planes}
  //       terms={terms.data.planes}
  //     />
  //     <StatsItem
  //       statsAll={stats.helicopters}
  //       statsDay={increase.helicopters}
  //       terms={terms.data.helicopters}
  //     />
  //     <StatsItem
  //       statsAll={stats.vehicles_fuel_tanks}
  //       statsDay={increase.vehicles_fuel_tanks}
  //       terms={terms.data.vehicles_fuel_tanks}
  //     />
  //     <StatsItem
  //       statsAll={stats.warships_cutters}
  //       statsDay={increase.warships_cutters}
  //       terms={terms.data.warships_cutters}
  //     />
  //     <StatsItem
  //       statsAll={stats.cruise_missiles}
  //       statsDay={increase.cruise_missiles}
  //       terms={terms.data.cruise_missiles}
  //     />
  //     <StatsItem
  //       statsAll={stats.uav_systems}
  //       statsDay={increase.uav_systems}
  //       terms={terms.data.uav_systems}
  //     />
  //     <StatsItem
  //       statsAll={stats.special_military_equip}
  //       statsDay={increase.special_military_equip}
  //       terms={terms.data.special_military_equip}
  //     />
  //     <StatsItem
  //       statsAll={stats.submarines}
  //       statsDay={increase.submarines}
  //       terms={terms.data.submarines}
  //     />
  //     <StatsItem
  //       statsAll={stats.atgm_srbm_systems}
  //       statsDay={increase.atgm_srbm_systems}
  //       terms={terms.data.atgm_srbm_systems}
  //     /> */}
      <Footer />
    </ScrollView>
  );
};

export default Stats;
