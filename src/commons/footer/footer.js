import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Pressable,
  Image,
} from 'react-native';


const Footer = () => {
  const onPressLinkedin = () => {
    Linking.openURL('www.linkedin.com/in/mykola-maslakai-28318027a');
  };
  return (
    <View style={styles.footer}>
      <Pressable onPress={onPressLinkedin} style={styles.contacts}>
        <Image style={styles.lin} source={require('../../icon/linkedin.png')} />
        <Text style={styles.footerName}>Mykola Maslakai</Text>
        <Text style={styles.footerName}>2023</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
  },

  contacts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  lin: {
    width: 30,
    height: 30,
  },

  footerName: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    padding: 10,
  },
});

export default Footer;
