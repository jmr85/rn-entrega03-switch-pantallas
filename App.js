import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGame from "./src/screens/start-game";
import GameScreen from "./src/screens/game-screen";
import GameOver from "./src/screens/game-over";
import { Header } from "./src/components/index";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  let [loaded] = useFonts({
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    openSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
    openSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  const handlerGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handlerRestartGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGame onStartGame={handlerStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userOptions={userNumber} onGameOver={handlerGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        rounds={guessRounds}
        choise={userNumber}
        onRestart={handlerRestartGame}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Adivina el número" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
