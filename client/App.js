import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, useEffect} from 'react'
import Splash from './screens/Splash';
import Registration from './screens/registration/Registration';
import MainScreen from './screens/main/MainScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getUser } from "./requests/userRequests";
import * as Device from "expo-device";
import * as SecureStore from "expo-secure-store";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "JockeyOne-Regular": require("./assets/fonts/JockeyOne-Regular.ttf"),
  });
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    try {
      const uniqueId = Device.osBuildId || Device.osInternalBuildId || Device.deviceName;
      if (uniqueId) {
        SecureStore.setItem("guestData", uniqueId);
        getUser(uniqueId).then((res) => {
          console.log(res.data)
          if (res.data === undefined) {
            setIsRegistered(false);
          }
          else{
            setIsRegistered(true);
          }
        });
        setTimeout(() => {
          setIsShowSplash(false)
      }, 2000)  
      }
    } catch (error) {
      setIsShowSplash(true)
    }
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
          <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}/>
        </Stack.Navigator>
        {isShowSplash ? (<Splash/>) : isRegistered ? <MainScreen/> : <Registration/>}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
