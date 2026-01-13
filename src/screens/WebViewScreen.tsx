import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import {
  ActivityIndicator,
  Button,
  Card,
  ProgressBar,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import * as Notifications from "expo-notifications";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "WebView">;

async function scheduleNotification(
  title: string,
  body: string,
  seconds: number = 0
) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: seconds > 0 ? { seconds, channelId: "default" } : null,
    // Passing null or 0 seconds usually triggers immediately depending on OS
  });
}

async function scheduleNotificationToMoveVideoScreen(
  title: string,
  body: string
) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data: {
        navigateTo: "VideoPlayer",
      },
    },
    trigger: {
      seconds: 3,
      channelId: "default",
    },
  });
}

export default function WebViewScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.webviewContainer}>
        {loading && (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color="#3b00a8" />
            {/* <ProgressBar progress={0.5} color="#3b00a8" /> */}
          </View>
        )}
        <WebView
          source={{
            uri: "https://docs.swmansion.com/react-native-reanimated/",
          }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => {
            setLoading(false);
            scheduleNotificationToMoveVideoScreen(
              "WebView Content Loaded 🌐",
              "The WebView content has finished loading, you can tap to open the video player"
            );
          }}
        />
      </View>

      <Card style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() =>
            scheduleNotification(
              "Hello 👋",
              "This is notification from Button One",
              0
            )
          }
          style={styles.button}
        >
          Notification 1
        </Button>

        <Button
          mode="outlined"
          onPress={() =>
            scheduleNotification(
              "Hey there 🚀",
              "This is notification from Button Two",
              5
            )
          }
          style={styles.button}
        >
          Notification 2 (5 seconds)
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
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    zIndex: 10,
  },
  buttonContainer: {
    paddingVertical: 35,
    paddingHorizontal: 16,
  },
  button: {
    marginBottom: 10,
  },
});
