import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/stats';
import Header from './commons/header';
import {useDispatch} from 'react-redux';
// import {addStats} from '../../redux/statsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  // const test = 'test';
  // useEffect(() => {
  //   dispatch(addStats(test));
  // });
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#0057b8', '#fff', '#FFD600']}
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}>
        <Header />
        <Stats />
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
