import React from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { WebView } from "react-native-webview";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import * as Notifications from "expo-notifications";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "WebView">;

async function scheduleNotification(title: string, body: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      seconds: 3,
    },
  });
}

export default function WebViewScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      {/* WebView */}
      <View style={styles.webviewContainer}>
        <WebView
          source={{
            uri: "https://docs.swmansion.com/react-native-reanimated/",
          }}
        />
      </View>

      <Card style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() =>
            scheduleNotification(
              "Hello 👋",
              "This is notification from Button One"
            )
          }
          style={styles.button}
        >
          Trigger Notification 1
        </Button>

        <Button
          mode="outlined"
          onPress={() =>
            scheduleNotification(
              "Hey there 🚀",
              "This is notification from Button Two"
            )
          }
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
    paddingVertical: 35,
    paddingHorizontal: 16,
  },
  button: {
    marginBottom: 10,
  },
});
