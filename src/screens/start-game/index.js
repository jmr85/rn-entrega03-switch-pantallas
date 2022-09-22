import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Card, Input, NumberContainer } from "../../components/index";
import { styles } from "./styles";
import Colors from "../../constants/colors";

const StartGame = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const isIOS = Platform.OS === "ios";

  const handlerInputNumber = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const handlerClearInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handlerConfirmInput = () => {
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={styles.subtitle}>Tu selección</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Empezar Juego"
          onPress={() => onStartGame(selectedNumber)}
          color={Colors.secondary}
        />
      </Card>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isIOS ? "position" : "height"}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback
        style={styles.containerTouchable}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView style={styles.containerScroll}>
          <Text style={styles.title}>Comenzar Juego</Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.subtitle}>Elija el Numero</Text>
            <Input
              placeholder="Ingresa un Numero"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={2}
              blurOnSubmit
              onChangeText={handlerInputNumber}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Limpiar"
                  onPress={() => handlerClearInput()}
                  color={Colors.primary}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Confirmar"
                  onPress={() => handlerConfirmInput()}
                  color={Colors.secondary}
                />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;
