import { createStackNavigator } from 'react-navigation';

import ActivityIndicatorPage from './pages/ActivityIndicator.page';
import buttonPage from './pages/button.page';

import indexPage from './pages/index.page';

import modalPage from './pages/modal.page';
import pickerPage from './pages/picker.page';
import scrollviewPage from './pages/scrollview.page';
import sliderPage from './pages/slider.page';
import statusbarPage from './pages/statusbar.page';
import webviewPage from './pages/webview.page';

const appCtrl = createStackNavigator({
  Index: { screen: indexPage },
  ac: { screen: ActivityIndicatorPage },
  bu: { screen: buttonPage },
  mo: { screen: modalPage },
  pi: { screen: pickerPage },
  sc: { screen: scrollviewPage },
  sl: { screen: sliderPage },
  st: { screen: statusbarPage },
  we: { screen: webviewPage },
});

export default appCtrl;
