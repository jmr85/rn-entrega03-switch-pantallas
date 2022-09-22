import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    marginTop: 60,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.textColorPrimary,
    fontSize: 22,
    fontFamily: "openSansBold",
  },
});
