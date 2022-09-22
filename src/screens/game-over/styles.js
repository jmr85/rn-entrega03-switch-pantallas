import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainer: {
    marginBottom: 20,
    padding: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: height * 0.3,
  },
  containerLandscape: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLandscape: {
    width: "50%",
    height: height * 0.2,
  },
});
