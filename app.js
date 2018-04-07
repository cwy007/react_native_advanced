import {
  AppRegistry,
} from 'react-native';
// import LoginScreen from './app/login';
import FlexLayout from './app/flex_layout';
import NavigatorTest from './app/welcome/navigator_test';

const AppStart = () => {
  AppRegistry.registerComponent("react_native_advanced", () => { return NavigatorTest })
}

module.exports = AppStart;
