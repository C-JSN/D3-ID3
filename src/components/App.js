import React, { Component } from 'react';
import { render } from 'react-dom';
import TextEditor from './editor/textEditor';


export default class App extends Component {

  // componentDidMount() {
  //   let isLeftResizing = false;
  //   let isRightResizing = false;
  //   let leftSizer = document.getElementById('left-sizer');
  //   let rightSizer = document.getElementById('right-sizer');
  //   let container = document.getElementById('panel-container');
  //   let left = document.getElementById('left-panel');
  //   let right = document.getElementById('right-panel');
  //
  //   leftSizer.addEventListener('mousedown', (e) => {
  //     isLeftResizing = true;
  //   });
  //
  //   rightSizer.addEventListener('mousedown', (e) => {
  //     isRightResizing = true;
  //   });
  //
  //   document.addEventListener('mousemove', (e) => {
  //     if (isLeftResizing) {
  //       let leftWidth = e.clientX - container.offsetLeft;
  //       left.style.width = `${leftWidth}px`;
  //     }
  //
  //     if (isRightResizing) {
  //       let rightWidth = e.clientX - container.offsetLeft;
  //       right.style.width = `${rightWidth}px`;
  //     }
  //   });
  //
  //   document.addEventListener('mouseup', () => {
  //     isLeftResizing = false;
  //     isRightResizing = false;
  //   });
  // }

  // render() {
  //   return (
  //     <div className="main-container" id="panels-container">
  //       <LeftPanel />
  //       {/* <div id="left-sizer"></div> */}
  //       <TextEditor />
  //       {/* <div id="right-sizer"></div> */}
  //       <RightPanel />
  //     </div>
  //   );
  // };
  render() {
    return (
      <div className="pane-group">
        <div className="pane">
          <TextEditor />
        </div>
        <div className="pane-one-fourth"></div>
      </div>
    );
  };
}
