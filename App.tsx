import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
import { DetailedTraining } from './screens/detailedTraining/DetailedTraining'
import { Home } from './screens/home/Home'
import { Login } from './screens/login/Login'
const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
      <Stack.Screen name='Details' component={DetailedTraining} options={{headerShown: false, animation: 'none'}} />
    </Stack.Navigator>
  )
}

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content')
    Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent')
    StatusBar.setTranslucent(true)
  }, [])

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor='transparent' />
      <AppStack />
    </NavigationContainer>
  )
}
