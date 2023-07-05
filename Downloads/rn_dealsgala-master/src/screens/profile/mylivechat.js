import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class MyLiveChatScreen extends React.Component {


  render() {
    return <WebView source={{ uri: 'https://tawk.to/chat/5e9254f335bcbb0c9ab01ccd/default' }} />;
  }
}

