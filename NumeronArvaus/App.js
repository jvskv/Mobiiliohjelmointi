import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [guess, setGuess] = React.useState(0);
  const [randomNum, setRandomNum] = React.useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("Guess a number between 1-100");

  const ButtonPressed = () => {
    if (guess == randomNum) {
      setCount(count + 1);
      Alert.alert("You guessed the number in " + count + " guesses");
    } else if (guess < randomNum) {
      setCount(count + 1);
      setText("Your guess " + guess + " is too low");
    } else if (guess > randomNum) {
      setCount(count + 1);
      setText("Your guess " + guess + " is too high");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(guess) => setGuess(guess)}
        value={guess}
      />
      <View style={styles.buttons}>
        <Button title="Make Guess" onPress={ButtonPressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 100,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
