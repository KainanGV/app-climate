import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  // status bar componente da barra superior do dispositivo

  return (

    // Criamos um container de navegação por meio do componente Navigation
    <NavigationContainer>
      <StatusBar 
        hidden={true}
      />
      <Routes />
    </NavigationContainer>
  );
}

