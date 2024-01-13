import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {Provider} from 'react-redux';

import Calendar from './src/pages/Calendar';
import HomePage from './src/pages/HomePage';
import {store} from './src/redux/store';
import {getFCMToken} from './src/commons/helpers/notifications';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
const Tab = createBottomTabNavigator();

const App = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  // useEffect(() => {
  //     const fetchToken = async () => {
  //       const token = await getFCMToken();
  //       if (token) {
  //         setFcmToken(token);
  //         console.log('token', token);
  //       }
  //       void fetchToken();
  //     };
  //   const ubsuscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new message arrived!', JSON.stringify(remoteMessage));
  //   });
  //   return ubsuscribe;
  // }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#0057b8',
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#FFD600',
            },
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <FontAwesomeIcon icon={faHome} color={color} />
              ),
            }}
            component={HomePage}
          />
          <Tab.Screen
            name="Calendar"
            options={{
              tabBarLabel: 'Calendar',
              tabBarIcon: ({color}) => (
                <FontAwesomeIcon icon={faCalendarDays} color={color} />
              ),
            }}
            component={Calendar}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
