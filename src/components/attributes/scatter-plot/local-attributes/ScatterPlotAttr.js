import React, { Component } from 'react';

class Points extends Component {
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
    let points = <div className="points-display"></div>

    if (this.state.checkbox) {
      points = <div className="points-display">
        <div className="attr-input">
          <label>
            Radius:
            <input className="form-control"></input>
          </label>
          <label>
            Color:
            <input className="form-control"></input>
          </label>
        </div>
        <h6 className="panel-headers">Transitions & Animations</h6>
        <div className="attr-input">
          <label>
            Radius:
            <input type="number" className="form-control"></input>
          </label>
          <label>
            Color:
            <input type="text" className="form-control"></input>
          </label>
        </div>
        <label>
          Entry Delay:
          <input type="number" className="form-control"></input>
        </label>
      </div>
    }

    return(
      <div className="scatterplot-attr-container">
        <div className="checkbox">
          <form onSubmit={this.onSubmit}>
            <label>
              <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}></input>
              Points
            </label>
          </form>
        </div>
        {points}
      </div>
    );
  }
}

export default Points;
