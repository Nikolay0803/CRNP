import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useDispatch} from 'react-redux';
import {changeDate} from '../../../redux/dateSlice';

const CalendarItem = () => {
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch();
  const setDate = day => {
    setSelected(day.dateString);
     dispatch(changeDate(day.dateString));
  };

  return (
    <SafeAreaView style={styles.calendarBlock}>
      <Text style={styles.calendarDay}>14 грудня</Text>
      <View style={styles.calendar}>
        <Calendar
          onDayPress={day => {
            setDate(day);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 5,
    paddingTop: 15,
    display: 'flex',
    marginBottom: 120,
  },
  calendarDay: {
    fontSize: 24,
    color: 'white',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
  calendar: {
    height: 250,
    backgroundColor: 'white',
  },
});

export default CalendarItem;
