import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import * as styleConstants from "../../constants/styleConstants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Device from "expo-device";
import * as SecureStore from "expo-secure-store";
import { useState, useEffect } from "react";
import { registerUser, testRequest } from "../../requests/userRequests";

type RootStackParamList = {
  Registration: undefined;
  // add other screens here
};

interface IState {
  deviceId: string,
  nickname: string,
  isError: boolean,
}

type NavigationProp = StackNavigationProp<RootStackParamList, "Registration">;

export default function Registration() {
  const navigation = useNavigation<NavigationProp>();

  // LOCAL STATE UPDATE
  const updateState = (newState: Partial<IState>): void =>
    setState((prevState) => ({ ...prevState, ...newState }));
  const [state, setState] = useState<IState>({
    deviceId: '',
    nickname: '',
    isError: false,
  });

  const registerGuest = async () => {
    const uniqueId =
      Device.osBuildId || Device.osInternalBuildId || Device.deviceName;
    if (uniqueId) {
      const guestData = { guestId: uniqueId };

      await SecureStore.setItemAsync("guestData", JSON.stringify(guestData));

      console.log(
        "Registration Successful",
        "You have been registered as a guest."
      );

      updateState({deviceId: uniqueId})
    } else {
      console.error("Error", "Unable to retrieve device information.");
    }
  };

  const changeHandler = (inputValue: string) => {
    updateState({nickname: inputValue})
  }

  const register = async () => {
    try {
      await registerGuest();
      const res = await registerUser({deviceId: state.deviceId, nickname: state.nickname})
      updateState({isError: false})
    }
    catch (error) {
      updateState({isError: true})
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[styleConstants.blue, "#fff"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <View style={styles.topPosition}>
          <Text style={styles.alertText}>
            Careful! You will be registered as guest
          </Text>
          <Text style={styles.alertSmallText}>
            In future you will have opportunity to bind your account with Google (So till that time please do not lose your phone)
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Enter your nickname</Text>
          <Input placeholder={"Nickname"} changeHandler={changeHandler}/>
          {state.isError && <Text style={styles.alertSmallText}>Username is taken</Text>}
        </View>
        <Button onPressHandler={register} />
      </View>
    </SafeAreaView>
  );
}
