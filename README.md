
# <i>Info Per Me:</i>
### Initial commands:

https://nodejs.org/en/download

  
```bash
npm install -g @ionic/cli
```
  
```bash
npm install –g @angular/cli
```
  
```bash
git clone https://github.com/ceotrammell/Hybrid-Angular-Ionic-Cap.git
```
  

cd /Hybrid-Angular-Ionic-Cap

  
```bash
npm i
```
  
  ```bash
ionic build
```
  
```bash
ionic serve
```
  

### Capacitor commands:

#### ios:

##### Download Xcode:

https://apps.apple.com/us/app/xcode/id497799835
  
```bash
ionic capacitor add ios
```
  
```bash
ionic capacitor build ios
```
  
```bash
ionic capacitor open ios
```

##### Cocoa Pods issues?
https://capacitorjs.com/docs/getting-started/environment-setup

```bash
sudo brew install cocoapods
```
  cd /ios/App
```bash
sudo pod install
```

#### android:

##### Download Android Studio:

https://developer.android.com/

  
```bash
ionic capacitor add android
```
  
```bash
ionic capacitor build android
```
  
```bash
ionic capacitor open android
```
##### Java Issues?
https://capacitorjs.com/docs/getting-started/environment-setup
  



### Ionic Framework Docs :

#### General
https://ionicframework.com/docs/intro/cli
https://ionicframework.com/docs/cli/commands/start

#### Angular
https://ionicframework.com/docs/angular/your-first-app

#### React
https://ionicframework.com/docs/react/your-first-app

#### Vue
  https://ionicframework.com/docs/vue/your-first-app

#### Capacitor

https://capacitorjs.com/solution/angular

  

### Angular Framework Info:

https://angular.io/

### React Framework Info:

https://react.dev/

### Vue Framework Info:

https://vuejs.org/

### Common style libraries (outside of ionic):
https://tailwindcss.com/
https://getbootstrap.com/

# <i>Info Per Ionic:</i>

# Ionic Angular Conference Application

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.

## React and Vue Versions

We've built versions of this Conference app in React and Vue for developers that would prefer to use one of those framework options:

[https://github.com/ionic-team/ionic-react-conference-app](https://github.com/ionic-team/ionic-react-conference-app)

[https://github.com/ionic-team/ionic-vue-conference-app](https://github.com/ionic-team/ionic-vue-conference-app)

## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing

See [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:


## App Preview

### [Menu](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/menu/menu.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Menu](/resources/screenshots/android-menu.png) | ![iOS Menu](/resources/screenshots/ios-menu.png) |


### [Schedule Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/schedule/schedule.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Schedule](/resources/screenshots/android-schedule.png) | ![iOS Schedule](/resources/screenshots/ios-schedule.png) |

### [Speakers Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/speaker-list/speaker-list.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speakers](/resources/screenshots/android-speakers.png) | ![iOS Speakers](/resources/screenshots/ios-speakers.png) |

### [Speaker Detail Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/speaker-detail/speaker-detail.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speaker Detail](/resources/screenshots/android-speaker-detail.png) | ![iOS Speaker Detail](/resources/screenshots/ios-speaker-detail.png) |

### [About Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/about/about.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android About](/resources/screenshots/android-about.png) | ![iOS About](/resources/screenshots/ios-about.png) |


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `ionic build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
