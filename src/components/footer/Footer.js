import React, { Component } from 'react';
import { render } from 'react-dom';
import FooterToolbar from './FooterToolbar';

export default class Footer extends Component {
  render() {
    return (
      <footer className="toolbar toolbar-footer">
        <FooterToolbar />
      </footer>
    );
  };
}
