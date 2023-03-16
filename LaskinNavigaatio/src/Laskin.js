import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Laskin({ navigation }) {
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);
  const [key, setKey] = useState(0);

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const buttonPressedPlus = () => {
    setResult(parseInt(number1) + parseInt(number2));

    var equation = parseInt(number1) + parseInt(number2);
    var history = number1 + " + " + number2 + " = " + equation;

    setData([...data, { id: key, title: history }]);

    setKey(key + 1);

    setNumber1("");
    setNumber2("");
  };

  const buttonPressedMinus = () => {
    setResult(parseInt(number1) - parseInt(number2));

    var equation = parseInt(number1) - parseInt(number2);
    var history = number1 + " - " + number2 + " = " + equation;

    setData([...data, { id: key, title: history }]);

    setKey(key + 1);

    setNumber1("");
    setNumber2("");
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
        </View>
        <View>
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
          <Button
            title="Historia"
            onPress={() => navigation.navigate("Historia", { data })}
          />
        </View>
        <StatusBar style="auto" />
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
    width: 130,
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
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
