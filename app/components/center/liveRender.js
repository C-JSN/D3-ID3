import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
var path = require('path');

export default class LiveRender extends Component {
  render() {
    const url = path.resolve(__dirname, '../ID3-React/app/components/temp/temp.html');
    console.log(url);
    return (
      <webview src="/Users/eveafeline/Documents/Codesmith/senior/ID3-React/app/components/temp/temp.html"></webview>
    )
  }
}
