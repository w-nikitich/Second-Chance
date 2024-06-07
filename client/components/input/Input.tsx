import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";

type InputProps = {
  placeholder: string;
  changeHandler: any;
};

interface IState {
  text: string;
}

export default function Input({ placeholder, changeHandler }: InputProps) {
  // LOCAL STATE UPDATE
  const updateState = (newState: Partial<IState>): void =>
    setState((prevState) => ({ ...prevState, ...newState }));
  const [state, setState] = useState<IState>({
    text: "",
  });

  function handleInputChange(text: string) {
    updateState({text: text})
    changeHandler(text)
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={state.text}
        onChangeText={handleInputChange}
      />
    </View>
  );
}
