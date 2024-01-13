import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/stats';
import Header from './commons/header';
import {useDispatch, useSelector} from 'react-redux';
import { fetchStatistics } from '../../axios/statistics';
import { fetchTerms } from '../../axios/terms';
import Loader from '../Calendar/commons/loader/modalLoader';

const HomePage = () => {
  const dispatch = useDispatch();
  const stats = useSelector(state => state.stats.data);
  const terms = useSelector(state => state.terms.data);
    const [modal, setModal] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
         setModal(true);
        const [statsResponse, termsResponse] = await Promise.all([
          dispatch(fetchStatistics()),
          dispatch(fetchTerms()),
        ]);
        const statsResult = statsResponse.payload?.data;
        const termsResult = termsResponse.payload?.data;

        console.log('Stats Data:', statsResult);
        console.log('Terms Data:', termsResult);
   
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    setModal(false);
      
  }, []);

 
  return (
    <SafeAreaView>
      <Loader visible={modal} />
      <LinearGradient
        colors={['#0057b8', '#fff', '#FFD600']}
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}>
        <Header warDay={stats?.data?.day} />
        <Stats stats={stats} terms={terms} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
});
export default HomePage;
