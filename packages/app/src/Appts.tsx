import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const newLocal1 = 'Press Cmd+R to reload,\n';
const newLocal2 = 'Double tap R on your keyboard to reload,\n';
const instructions = Platform.select({
  ios: newLocal1 +
    'Cmd+D or shake for dev menu',
  android: newLocal2 +
    'Shake or press menu button for dev menu',
});

export interface Props { }
export interface State { }

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
