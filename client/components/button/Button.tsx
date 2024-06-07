import { View, TouchableOpacity, Text, Pressable } from "react-native";
import { styles } from "../../styles/styles";

type ButtonProps = {
  onPressHandler: any;
}

export default function Button({onPressHandler} : ButtonProps) {
  // onPress request to check if the nickname is unique

  return (
    <View style={[styles.wrapper, styles.bottomGapView]}>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.titleText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
