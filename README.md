# Project flow Document
> Document: Project flow document and recording is in the root of the project under the "blePocDoc" directory.


## Working steps
1. First screen when we launch the application. On click of search button it will start search nearby available BLE devices.
![IMG_0040](https://github.com/user-attachments/assets/33e8c548-7872-4eb3-b13e-838a9e8cb904)

2. After click on the scan button one animation will be shown on the screen and in the background, it will be keep on fetching the available BLE devices list.
![IMG_0041](https://github.com/user-attachments/assets/d25c0d15-cf04-4146-956e-724c32143e77)

3. . Once the scan will be completed it will display the list in a native modal so that user can select the device accordingly. I have number of BLE devices around me. One with the name of “iPhone”, which I have simulate my phone as Ble device to verify the connection.
- used NRF Connect App to convert iPhone as BLE device
![IMG_0042](https://github.com/user-attachments/assets/ea704030-81c8-46f3-9d05-54a7472b2bff)

4. Once we select any device it will display the selected device id and name on the first screen and close the device list modal.
![IMG_0044](https://github.com/user-attachments/assets/e6fbd363-688c-44c7-bafa-ac74514ae8c2)

5. Last step we can read all the data on which device we are connected with, Including its characteristics, serviceUUIDs, services etc.
<img width="1157" alt="Screenshot 2025-01-30 at 5 12 20 PM" src="https://github.com/user-attachments/assets/8c50538c-bd66-4605-b80e-74c870cd3008" />


## project flow video
https://github.com/user-attachments/assets/f10fd54a-791b-4d3e-ac08-8a9f054ea549



# Project setup Guide

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

