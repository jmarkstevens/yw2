import * as React from 'react';

import { Platform, StyleSheet, WebView } from 'react-native';

export default class MainActivity extends React.Component {
  render() {
    const htmlCode = `
      <div style="text-align: center; width: 100%;">
        <h1> h1 Heading Tag</h1>
        <p> Sample Paragraph Tag </p>
      </div>
    `;

    return (
      <WebView
        originWhitelist={['*']}
        style={styles.WebViewStyle}
        source={{ html: htmlCode }}
      />
    );
  }
}

const styles = StyleSheet.create(
  {
    WebViewStyle:
    {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: (Platform.OS) === 'ios' ? 20 : 0,
    },
  },
);
