import React, { useEffect, useState } from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalendarItem from './commons/CalendarItem';
import DayInfo from './commons/DateInfo';
import Loader from './commons/loader/modalLoader';
import axios from 'axios';
import LoaderNext from './commons/loader/modalNext';

const Calendar = () => {  const [modal, setModal] = useState(false)
  const [modalNext, setModalNext] = useState(false)
  const [stats, setStats] = useState([])
  const [terms, setTerms] = useState([])
  const [day, setDay] = useState(() => {
    const initialState = new Date().toISOString().split('T')[0];
    return initialState
  })
  useEffect(() => {
    setModal(true)
    fetchStatistic()
    fetchTerms()
 }, [day])

  const fetchStatistic = async () => {
    try {
      const response = await axios.get(
        `https://russianwarship.rip/api/v2/statistics/${day}`,
      );
      setStats(response.data);
              setModalNext(false);
    } catch (error) {
      if (error.response && error.response.status === 422) {
             setModalNext(true)
            }
    }
  };
  const fetchTerms = async () => {
    try {
      const lang = 'ua';
      const response = await axios.get(
        `https://russianwarship.rip/api/v2/terms/${lang}`,
      );
      setTerms(response.data);
    } catch (error) {

      console.error('Error:', error);
    }
    setModal(false)
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <Loader visible={modal} />
        <LoaderNext modalNext={modalNext} setModalNext={setModalNext} />
        <LinearGradient
          colors={['#0057b8', '#fff', '#FFD600']}
          start={{x: 0.0, y: 0.3}}
          end={{x: 0.7, y: 1.0}}
          locations={[0, 0.45, 0.75]}
          style={styles.linearGradient}>
          <CalendarItem setDay={setDay} />
          <DayInfo stats={stats} terms={terms} />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});

export default Calendar;
