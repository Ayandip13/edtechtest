import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Button } from "react-native-paper";

export default function VideoPlayerScreen() {
  const videoRef = useRef<Video>(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
      />

      <Button
        mode="outlined"
        onPress={() => videoRef.current?.presentFullscreenPlayer()}
        style={styles.fullscreenButton}
      >
        Fullscreen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  video: {
    width: "100%",
    height: 220,
    backgroundColor: "black",
  },
  fullscreenButton: {
    marginTop: 16,
  },
});
