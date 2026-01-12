import React from "react";
import { View, StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";

const videoUrl =
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

export default function VideoPlayerScreen() {
  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={styles.video}
        allowsFullscreen
        allowsPictureInPicture
        showsPlaybackControls
      />
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
    height: 300,
    backgroundColor: "black",
  },
});
