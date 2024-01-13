import React, { useState } from 'react';
import {Modal, StyleSheet, Text, View, Pressable} from 'react-native';

const LoaderNext = ({modalNext, setModalNext}) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modalNext}>
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Упс!!!🙄Інформація про майбутня поки невідома😉</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalNext(false)}>
            <Text style={styles.textStyle}>Повернутись Назад</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(34,34,34,0.7)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 23,
    color: "red",
    textAlign: 'center',
  },
    buttonClose: {
      backgroundColor: '#2196F3',
      padding: 10,
  },
})

export default LoaderNext;
