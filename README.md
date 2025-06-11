# 📱 Expo App Development Setup

## 🚀 Installation & Running the App

### 1️⃣ Install Dependencies

Make sure you are inside coinbits-app, then run:

```sh
bun i
```
#### Important Note: this app runs on Expo52, make sure to have Expo Go v52 or you can use a development build  instead --recommended

### 2️⃣ Start a development build
For full native functionality (video playback, splashscreen, etc.), we recommend using a custom development build instead of Expo Go.

✅ Prerequisites
#### 1 Create or log in to your Expo account
Then log in using your terminal:
```sh
bunx eas login
```

#### 2 Install EAS CLI
```sh
bunx install -g eas-cli
```

#### 3 Install EAS CLI
For Android
```sh
bunx eas build --platform android --profile preview
```
for IOS
```sh
bunx eas build --platform ios --profile preview
```
ℹ️ iOS Note: You must have an Apple Developer account connected to Expo to build for iOS. You can open the .ipa using TestFlight or a simulator.

#### 4 Install the Build on Your Device
After the build completes:

##### 1 You'll receive a QR code or download link in the terminal.

##### 2 Scan/download it on your device to install the custom Expo dev client.

##### 3 Then start the project with:

```sh
bunx expo start --dev-client
```
## Expo Go (Native features are not available and the app might crash)

### Start the Development Server

```sh
bunx expo start
```

This will open the **Expo Developer Tools** in your browser.

### 3️⃣ Run the App on Your Device

#### 📲 **For Android Users:**

1. Install the **Expo Go** app from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
2. Open Expo Go and scan the QR code displayed in your terminal or browser.

#### 🍏 **For iOS Users:**

1. Install the **Expo Go** app from the [App Store](https://apps.apple.com/app/expo-go/id982107779).
2. Open the Camera app on your iPhone and scan the QR code.
3. Tap the link that appears to open the app in Expo Go.

---

## 🛠️ Debugging

### 🔵 **Blue Screen or Infinite Loading on Mobile?**
If scanning the QR code results in a blue screen or an infinite loading screen on your mobile device, try the following:

#### ✅ Step 1: Test Web Mode
1. Run Expo in web mode by pressing **'w'** in the terminal.
2. If the app works fine in web mode, the issue might be with your mobile setup.

#### ✅ Step 2: Install Android SDK (For Android Development)
If you're using an Android device and encountering issues:
- **Windows Users:** Install the latest version of [Android Studio](https://developer.android.com/studio), which includes the required Android SDK.
- **Mac/Linux Users:** Follow online guides to install the **Android SDK** and **ADB** manually.

#### ✅ Step 3: Clear Cache and Restart Expo
```sh
bunx expo start -c
```
This clears the cache and restarts the development server, which can resolve many issues.

#### ✅ Step 4: Use Tunnel Mode (If Connection Issues Persist)
If the app still does not load properly, your device might not be connecting to your local development server due to network restrictions. Try starting Expo in **Tunnel mode**:

```sh
bunx expo start --tunnel
```
Use Tunnel mode **only when LAN mode fails**

---

### 🔵 **Nativewind classes not being reflected?**
#### ✅Clear Cache and Restart Expo
```sh
bunx expo start -c
```
