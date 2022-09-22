import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, Dimensions } from "react-native";
import { styles } from "./styles";

import { Card } from "../../components/index";
import Colors from "../../constants/colors";

const GameOver = ({ rounds, choise, onRestart }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => setIsPortrait(onPortrait());

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    return () => {
      Dimensions.removeEventListener("change", statePortrait);
    };
  });

  return (
    <View style={isPortrait ? styles.container : styles.containerLandscape}>
      <Image
        style={isPortrait ? styles.image : styles.imageLandscape}
        source={{
          uri: "https://www.mentsalud.com/wp-content/uploads/2020/08/game-over-videojuegos-924x480.jpg",
        }}
      />
      <Card style={styles.resultContainer}>
        <Text>Intentos: {rounds}</Text>
        <Text>El número era: {choise}</Text>
      </Card>
      <Button title="Reiniciar" onPress={onRestart} color={Colors.primary} />
    </View>
  );
};

export default GameOver;
