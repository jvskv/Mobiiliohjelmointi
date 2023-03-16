import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  StatusBar,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";

export default function App() {
  const [result, setResult] = React.useState(0);
  const [data, setData] = useState([]);
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [key, setKey] = React.useState(0);

  const buttonPressedPlus = () => {
    setResult(parseInt(number1) + parseInt(number2));

    var equation = parseInt(number1) + parseInt(number2);
    var history = number1 + " + " + number2 + " = " + equation;

    setData([...data, { id: key, title: history }]);

    setKey(key + 1);

    setNumber1(0);
    setNumber2(0);
  };

  const buttonPressedMinus = () => {
    setResult(parseInt(number1) - parseInt(number2));

    var equation = parseInt(number1) - parseInt(number2);
    var history = number1 + " - " + number2 + " = " + equation;

    setData([...data, { id: key, title: history }]);

    setKey(key + 1);

    setNumber1(0);
    setNumber2(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.centerResult}>
          <Text>Results: {result}</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(number1) => setNumber1(number1)}
            value={number1}
          />
          <TextInput
            style={styles.input}
            onChangeText={(number2) => setNumber2(number2)}
            value={number2}
          />
        </View>
        <View style={styles.buttons}>
          <Button title="+" onPress={buttonPressedPlus} />
          <Button title="-" onPress={buttonPressedMinus} />
        </View>
        <View style={styles.history}>
          <Text>History</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.title}</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  innerContainer: {
    width: 100,
  },
  centerResult: {
    alignItems: "center",
  },
  input: {
    marginBottom: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  history: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
});
