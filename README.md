# Expo WebView + Notifications + Video Player App

## 📌 Overview

This is a simple Expo React Native application built as part of an assignment to demonstrate:

- Embedding a website using WebView
- Triggering delayed local notifications based on user interaction
- Playing an HLS video stream on a separate screen
- Navigating between screens
- Using a UI component library instead of plain React Native components

The app is built using Expo SDK 54 and runs locally as well as in a development build.

---

## 🧱 App Structure

The app consists of **two main screens**:

### 1. WebView + Notifications Screen
- Displays a website inside the app using `react-native-webview`
- Contains two buttons that trigger different local notifications
- Notifications are delayed by a few seconds (2–5 seconds)
- Sends a notification when the WebView finishes loading

### 2. Video Player Screen
- Plays an HLS video stream using Expo’s video player
- Uses the test stream:


`https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`


- Includes native play, pause, seek, and fullscreen controls


## 🔔 Notification Behavior

- Notifications are local notifications (not push notifications)
- Triggered only by user interaction or WebView load completion
- Notifications appear after a short delay
- A specific notification (WebView loaded notification) carries contextual data
- When this specific notification is tapped, the app automatically navigates to the **Video Player screen**
- Other notifications do not trigger navigation

This behavior is implemented using:
- `expo-notifications`
- Notification `data` payload
- A global navigation reference

---

## 🧭 Navigation

- Navigation is handled using React Navigation (Native Stack)
- A global navigation ref is used to allow navigation from outside screen components (e.g., notification tap handler)

---

## 🎨 UI Components

Instead of using plain `View` and `Text`, the app uses:

- react-native-paper
- Buttons
- Cards
- Consistent spacing and styling

This keeps the UI clean and readable.

---

## 🛠 Tech Stack

- Expo (SDK 54)
- React Native
- TypeScript
- react-native-webview
- expo-notifications
- expo-video (video playback)
- react-navigation
- react-native-paper

---

## ▶️ How to Run the App

### 1. Install dependencies
```bash
npm install

## 2. Run Development build
npx expo prebuild
npx expo run:android
