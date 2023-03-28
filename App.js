import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './emp-detail';
import Listing from './emp-listing';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Detail' component={Detail}/>
      <Stack.Screen name='Listing' component={Listing}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


