import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigators/StackNavigator'

const App = () => {
  return (
    // içine verilen navigatöre gerekli bilgi ve kodları yollayan kapsayıcıl
    <NavigationContainer>

      {/* sayfaları içeren navigatörün kendisi  */}
      <StackNavigator />

    </NavigationContainer>
  )
}

export default App