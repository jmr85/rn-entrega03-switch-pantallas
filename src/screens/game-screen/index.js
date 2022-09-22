import react, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import { Card, NumberContainer } from "../../components";
import Colors from "../../constants/colors";
import { styles } from "./styles";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
};

const GameScrenn = ({ userOptions, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOptions)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const handlerNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userOptions) ||
      (direction === "greater" && currentGuess > userOptions)
    ) {
      Alert.alert("No mientas", "Tu sabes que no es verdad...!", [
        { text: "¡Disculpa!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((current) => current + 1);
  };

  useEffect(() => {
    if (currentGuess == userOptions) onGameOver(rounds);
  }, [currentGuess, userOptions, onGameOver]);

  return (
    <View style={styles.container}>
      <Text>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <Button
          title="Menor"
          onPress={() => handlerNextGuess("lower")}
          color={Colors.primary}
        />
        <Button
          title="Mayor"
          onPress={() => handlerNextGuess("greater")}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

export default GameScrenn;
