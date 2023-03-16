import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [grocery, setGrocery] = React.useState("");
  const [data, setData] = React.useState([]);
  const [key, setKey] = React.useState(0);

  const addButton = () => {
    setData([...data, { id: key, title: grocery }]);
    setKey(key + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(grocery) => setGrocery(grocery)}
          value={grocery}
        />
        <View stly={styles.buttons}>
          <Button title="Add" onPress={addButton} />
        </View>
        <View stly={styles.buttons}>
          <Button title="Clear" onPress={() => setData(() => "")} />
        </View>
        <View style={styles.grocerylist}>
          <Text>Shopping list:{"\n"}</Text>
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
    width: 120,
  },
  centerResult: {
    alignItems: "center",
  },
  input: {
    marginBottom: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  grocerylist: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
});
