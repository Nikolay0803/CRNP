import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

const Loader = ({visible}) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <ActivityIndicator size="large" color="00ff00" />
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
   backgroundColor: "rgba(34,34,34,0.7)",
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Loader;
