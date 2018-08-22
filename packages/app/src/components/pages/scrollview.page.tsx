import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const NUM_ITEMS = 20;

export default class ScrollViewPage extends React.Component {
  static navigationOptions = { title: 'ScrollView' };
  // tslint:disable-next-line:no-shadowed-variable
  makeItems = (nItems: number, styles: object): any[] => {
    const items = [];
    for (let i = 0; i < nItems; i += 1) {
      items[i] = (
        <TouchableOpacity key={i} style={styles}>
          <Text>{'Item ' + i}</Text>
        </TouchableOpacity>
      );
    }
    return items;
  }
  render() {
    const items = this.makeItems(NUM_ITEMS, styles.itemWrapper);
    items[4] = (
      <ScrollView key={'scrollView'} horizontal>
        {this.makeItems(NUM_ITEMS, [
          styles.itemWrapper,
          styles.horizontalItemWrapper,
        ])}
      </ScrollView>
    );

    const verticalScrollView = (
      <ScrollView style={styles.verticalScrollView}>{items}</ScrollView>
    );
    return <View style={styles.container}>{verticalScrollView}</View>;
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
  verticalScrollView: {
    margin: 10,
  },
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#114e21',
    padding: 30,
    margin: 5,
  },
  horizontalItemWrapper: {
    padding: 50,
  },
});
