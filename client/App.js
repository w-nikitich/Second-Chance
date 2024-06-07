import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, useEffect} from 'react'
import Splash from './screens/Splash';
import Registration from './screens/registration/Registration';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "JockeyOne-Regular": require("./assets/fonts/JockeyOne-Regular.ttf"),
  });
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsShowSplash(false)
    }, 2000)  
})

  if (!fontsLoaded) {
    return
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}/>
        </Stack.Navigator>
        {isShowSplash ? (<Splash/>) : (<Registration/>)}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
