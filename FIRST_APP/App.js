import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <View styles={styles.container}>
      <TextInput
        styles={{ width: 200, borderColor: "gray", borderwidth: 1 }}
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button title="Add todo" onPress={() => setTodos(...todos, todo)} />
      <FlatList data={todos} renderItem={({ item }) => <Text>{item}</Text>} />
      <StatusBar styles="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
});
