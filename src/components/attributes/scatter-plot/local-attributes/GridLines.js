import React, { Component } from 'react';

class GridLines extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkbox: false
    }

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  handleCheckbox(event) {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  render() {
    let gridLineDisplay = <div id="gridline-display"></div>

    if (this.state.checkbox) {
      gridLineDisplay = <div id="gridline-display">
                <h6>X-GridLines</h6>
                <div className="attr-input">
                  <label>
                    Width:
                    <input type="number" className="form-control"></input>
                  </label>
                  <label>
                    Color:
                    <input  type="text" className="form-control"></input>
                  </label>
                </div>
                <h6>Y-Gridlines</h6>
                <div className="attr-input">
                  <label>
                    Width:
                    <input type="number" className="form-control"></input>
                  </label>
                  <label>
                    Color:
                    <input type="text" className="form-control"></input>
                  </label>
                </div>
                <hr></hr>
              </div>
    }
    return(
      <div className="gridlines-container">
        <div className="checkbox">
          <form onSubmit={this.onSubmit}>
            <label>
              <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}></input>
              GridLines
            </label>
          </form>
        </div>
        {gridLineDisplay}
      </div>
    );
  }
}

export default GridLines;
