import React, { Component } from 'react';
import { render } from 'react-dom';
import TextEditor from './center/textEditor';
// import styles from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props),
    this.styles = {
      left: {
        display: "inline-block",
        height: "100%",
        width: "20%",
      },

      center: {
        display: "inline-block",
        height: "100%",
        width: "50%",
      },

      right: {
        display: "inline-block",
        height: "100%",
        width: "30%",
      }
    }
  }

  render() {
    return (
      <div>
        <div className={this.styles.left} data-tid="left-panel" >
          <p>this panel contains<br/>
            File System<br/>
            Data Management</p>
        </div>
        <div className={this.styles.center} data-tid="center-panel" >
          <TextEditor />
        </div>
        <div className={this.styles.right} data-tid="right-panel" >
          <p>this panel contains<br/>
            File System<br/>
            Data Management</p>
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
