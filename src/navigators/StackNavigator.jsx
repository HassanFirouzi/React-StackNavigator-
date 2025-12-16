import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ListingScreen from '../screens/ListingScreen'



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    
    <Stack.Navigator
   
      initialRouteName='HomeScreen'
    >

      
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
      <Stack.Screen name='ListingScreen' component={ListingScreen} />

      
    </Stack.Navigator>
  )
}

export default StackNavigator