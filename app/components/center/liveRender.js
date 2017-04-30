import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import Iframe from 'react-iframe';

export default class LiveRender extends Component {
  render() {
    return (
      <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
              width="50vw"
              height="50vh"
              display="initial"
              position="relative"
              allowFullScreen/>
    )
  }
}
