import React, { Component } from 'react';

class RegressionLine extends Component {
  constructor(props) {
    super(props);
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
    let regressionLineDisplay = <div id="regressionline-display"></div>

    if (this.state.checkbox) {
      regressionLineDisplay = <div id="regressionline-display">
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
      <div className="regressionline-container">
        <div className="checkbox">
          <form onSubmit={this.onSubmit}>
            <label>
              <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}></input>
              Regression Line
            </label>
          </form>
        </div>
        {regressionLineDisplay}
      </div>
    );
  }
}

export default RegressionLine;
