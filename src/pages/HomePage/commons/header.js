import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({warDay}) => {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  const monthNames = [
    'Січня',
    'Лютого',
    'Березня',
    'Квітеня',
    'Травеня',
    'Червеня',
    'Липня',
    'Серпня',
    'Вересня',
    'Жовтня',
    'Листопада',
    'Грудня',
  ];
  const nameMonth = monthNames[month];

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
      <Text style={styles.titleBig}>
        Загальні бойові втрати російського окупанта
      </Text>
      <View style={styles.blockData}>
        <Text style={styles.data}>
          {day} {nameMonth}
        </Text>
        <Text style={styles.day}>
          { warDay !== undefined
            ? `${warDay}-й день війни`
            : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    color: '#000',
  },
  titleBig: {
    fontSize: 24,
    color: '#000',
  },
  blockData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 19,
    color: '#FFD600',
    fontWeight: '600',
  },
  data: {
    fontSize: 18,
    fontWeight: '900',
  },
});

export default Header;
