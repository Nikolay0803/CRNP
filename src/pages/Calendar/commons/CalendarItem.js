import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarItem = ({setDay}) => {
  const [selected, setSelected] = useState('');
  const onSelected = day => {
    setSelected(day);
    setDay(day)
  }

  return (
    <SafeAreaView style={styles.calendarBlock}>
      {/* <Text style={styles.calendarDay}>
        {' '}
        {day} {nameMonth}
      </Text> */}
      <View style={styles.calendar}>
        <Calendar
          onDayPress={day => {
             onSelected(day.dateString);
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
