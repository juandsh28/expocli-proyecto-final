import React from 'react'
import { StyleSheet } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import NuevaScreen from './src/screens/NuevaScreen'
import { DetallesScreen } from './src/screens/DetallesScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" options={{ title: "Login" }} component={LoginScreen} />
        <Stack.Screen name="Home" options={{ title: "Inicio" }} component={HomeScreen} />
        <Stack.Screen name="Detalles" options={{ title: "Datos" }} component={DetallesScreen} />
        <Stack.Screen name="Nuevo" options={{ title: "Pais" }} component={NuevaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({} )