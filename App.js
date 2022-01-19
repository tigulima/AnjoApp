import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>WELCOME TO ANJO!</Text>
      <Image
        source={{
          uri: "https://anjo.mobi/wp-content/uploads/2020/06/disp_01.png",
        }}
        style={{
          height: 340,
          width: 300,
        }}
      />
      <View style={styles.button}>
        <Button
          onPress={() => {
            alert("oi... vc vem sempre aqui?");
          }}
          title="CONNECT"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45A6A2",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 100,
  },
  button: {
    backgroundColor: "#ECECEC",
    paddingHorizontal: 150,
    padding: 25,
    borderRadius: 5,
    marginTop: 150,
    marginBottom: 50,
  },
});
