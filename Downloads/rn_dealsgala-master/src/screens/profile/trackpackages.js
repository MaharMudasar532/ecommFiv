import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class TrackPackagesScreen extends React.Component {


  render() {
    return <WebView source={{ uri: 'https://test.dealsgala.com/track-order-phone/' }} />;
  }
}

