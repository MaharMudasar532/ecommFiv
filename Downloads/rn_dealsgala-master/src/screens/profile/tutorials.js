import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Tutorials extends React.Component {


  render() {
    return <WebView source={{ uri: 'https://test.dealsgala.com/tutorial-app/' }} />;
  }
}

