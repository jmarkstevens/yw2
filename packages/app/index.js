import {AppRegistry} from 'react-native';
import App from './src/components/app.ctrl';
import {name as appName} from './src/app.json';

AppRegistry.registerComponent(appName, () => App);
