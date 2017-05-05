import React, { Component } from 'react';
import { render } from 'react-dom';
import TextEditor from './center/textEditor';

export default class App extends Component {

  render() {
    return (
      <div className="main-container">
        <div data-tid="left-panel" id="leftPanel">
          <p>LEFT PANEL</p>
        </div>
        <div data-tid="center-panel" id="center">
          <TextEditor />
        </div>
        <div data-tid="right-panel" id="rightPanel">
          <p>RIGHT PANEL</p>
        </div>
      </div>
    );
  };
}

// import React, { Component } from 'react';
//
//
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>This information is very helpful</p>
//       </div>
//     )
//   }
//
// }
