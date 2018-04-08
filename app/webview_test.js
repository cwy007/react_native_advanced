import React, { Component } from 'react';
import {
  WebView,
  View,
  StyleSheet,
} from 'react-native';

export default class WebViewTest extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          style={{flex: 1}}
          ref="webview"
          source={{html: "<h1>web view</h1>"}}
          contentContainerStyle={{padding: 15,}}
        />
      </View>
    )
  }
}
