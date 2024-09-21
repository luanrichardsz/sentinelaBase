import { StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './screens/src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#23238E"} barStyle={'light-content'} />
      <Routes/>
    </NavigationContainer>
  );
}
