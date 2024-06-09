import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import * as styleConstants from "../../constants/styleConstants";
import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function MainScreen() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[styleConstants.blue, "#fff"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <View>
            <Text>Username</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
