import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class DeleteMyAccountScreen extends React.Component {


  render() {
    return <WebView source={{ uri: 'https://test.dealsgala.com/my-account/' }} />;
  }
}

