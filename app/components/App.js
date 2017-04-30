import React, { Component } from 'react';
import { render } from 'react-dom';
import TextEditor from './center/textEditor';
import LiveRender from './center/liveRender';

export default class App extends Component {

  render() {
    return (
      <div>
        <div style={{display: 'inline-block', position: 'relative', width: '20vw', height: '100vh', verticalAlign: 'top'}} data-tid="left-panel" >
          <p>this panel contains<br/>
            File System<br/>
            Data Management</p>
        </div>
        <div style={{display: 'inline-block', position: 'relative', width: '50vw', height: '100vh', verticalAlign: 'top'}} data-tid="center-panel" >
          <TextEditor />
          <LiveRender />
        </div>
        <div style={{display: 'inline-block', position: 'relative', width: '25vw', height: '100vh', verticalAlign: 'top'}} data-tid="right-panel" >
          <p>this panel contains<br/>
            Global Attribute<br/>
            Local Attribute</p>
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
