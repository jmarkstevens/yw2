import * as React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const barStyles = ['default', 'light-content', 'dark-content'];

const showHideTransitions = ['fade', 'slide'];

interface State {
  animated: boolean;
  barStyle: any;
  hidden: boolean;
  showHideTransition: any;
  networkActivityIndicatorVisible: boolean;
}

function getValue<T>(values: T[], index: number): T {
  return values[index % values.length];
}

class StatusBarPage extends React.Component {
  static navigationOptions = { title: 'StatusBar' };
  state: State = {
    animated: true,
    barStyle: 'default',
    hidden: false,
    showHideTransition: getValue(showHideTransitions, 0),
    networkActivityIndicatorVisible: false,
  };
  showHideTransitionIndex = 0;
  onChangeAnimated = () => {
    this.setState({ animated: !this.state.animated });
  }
  onChangeHidden = () => {
    this.setState({ hidden: !this.state.hidden });
  }
  onChangeTransition = () => {
    this.showHideTransitionIndex += 1;
    this.setState({
      showHideTransition: getValue(
        showHideTransitions,
        this.showHideTransitionIndex,
      ),
    });
  }
  barStyleIndex = 0;
  onChangeBarStyle = () => {
    this.barStyleIndex += 1;
    this.setState({ barStyle: getValue(barStyles, this.barStyleIndex) });
  }
  onChangeNetworkIndicatorVisible = () => {
    this.setState({
      networkActivityIndicatorVisible: !this.state
        .networkActivityIndicatorVisible,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={this.state.hidden}
          showHideTransition={this.state.showHideTransition}
          animated={this.state.animated}
          barStyle={this.state.barStyle}
          networkActivityIndicatorVisible={
            this.state.networkActivityIndicatorVisible
          }
        />
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeHidden}
        >
          <View style={styles.button}>
            <Text>hidden: {this.state.hidden ? 'true' : 'false'}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeAnimated}
        >
          <View style={styles.button}>
            <Text>
              animated (ios only): {this.state.animated ? 'true' : 'false'}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeTransition}
        >
          <View style={styles.button}>
            <Text>
              showHideTransition (ios only): '
              {getValue(showHideTransitions, this.showHideTransitionIndex)}'
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeBarStyle}
        >
          <View style={styles.button}>
            <Text>style: '{getValue(barStyles, this.barStyleIndex)}'</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.onChangeNetworkIndicatorVisible}
        >
          <View style={styles.button}>
            <Text>
              networkActivityIndicatorVisible:
              {this.state.networkActivityIndicatorVisible ? 'true' : 'false'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  returnView: {
    height: 35,
  },
  slider: {
    height: 5,
    margin: 10,
    width: 250,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

export default StatusBarPage;
