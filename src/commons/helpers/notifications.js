import messaging from '@react-native-firebase/messaging';
export const getFCMToken = async () => {
  try {
    const newFCMToken = await messaging().getToken();
    console.log('newFCMToken', newFCMToken);
  } catch (error) {
    console.error(error)
  }
}