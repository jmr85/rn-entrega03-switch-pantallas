import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  containerTouchable: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerScroll: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: "80%",
    minWidth: 300,
    alignItems: "center",
    paddingVertical: 20,
    maxWidth: "90%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  button: {
    width: width / 3.2,
  },
  summaryContainer: {
    width: width / 1.2,
    marginVertical: height > 600 ? 30 : 20,
    alignItems: "center",
    paddingVertical: height > 600 ? 30 : 20,
  },
  subtitle: {
    fontSize: 16,
  },
});
