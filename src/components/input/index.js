import react from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={[styles.input, { ...style }]} />;
};

export default Input;
