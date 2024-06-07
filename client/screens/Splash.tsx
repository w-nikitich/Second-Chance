import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as styleConstants from "../constants/styleConstants";
import * as images from "../constants/imageConstants";
import { styles } from "../styles/styles";
import mainImage from '../assets/images/mainImage.png'

export default function Splash() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[styleConstants.blue, "#fff"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <View style={styles.mainTextWrapper}>
          <Text style={styles.titleText}>This is your</Text>
          <Text style={styles.mainText}>Second Chance</Text>
        </View>

        <View style={styles.bottomView}>
          <Image source={mainImage} style={styles.mainImage} resizeMode='contain'/>
        </View>
      </View>
    </SafeAreaView>
  );
}
