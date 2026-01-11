import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "WebView">;

export default function WebViewScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.webviewContainer}>
        <WebView source={{ uri: "https://docs.swmansion.com/react-native-reanimated/" }} />
      </View>

      <Card style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => console.log("Notification 1")}
          style={styles.button}
        >
          Trigger Notification 1
        </Button>

        <Button
          mode="outlined"
          onPress={() => console.log("Notification 2")}
          style={styles.button}
        >
          Trigger Notification 2
        </Button>

        <Button mode="text" onPress={() => navigation.navigate("VideoPlayer")}>
          Go to Video Player
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
  },
  button: {
    marginBottom: 10,
  },
});
