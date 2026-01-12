import React from "react";
import { View, StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";

const videoUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

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
    backgroundColor: "#fff",
  },
  video: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#3b00a8",
    shadowOffset: {
      width: 50,
      height: 50,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
