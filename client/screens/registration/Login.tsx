import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import * as styleConstants from "../../constants/styleConstants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Registration: undefined;
  // add other screens here
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Registration">;

export default function Registration() {
  const navigation = useNavigation<NavigationProp>();

  const register = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient
        colors={[styleConstants.blue, "#fff"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <Text style={styles.titleText}>Enter your nickname and password</Text>
        <Input placeholder={"Nickname"} />
        <Input placeholder={"Password"} />

        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.linkText}>Or register</Text>
        </TouchableOpacity>
        <Button onPressHandler={register} />
      </View> */}
    </SafeAreaView>
  );
}