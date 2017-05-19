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
    let points = <div className="attr-display"></div>

    const radius = <div className="input-container">
                      <label>
                        radius
                        <input type="number" className="form-control"></input>
                      </label>
                    </div>

    const color = <div className="input-container">
                      <label>
                        color
                        <input type="text" className="form-control"></input>
                      </label>
                    </div>

    const pointDelay = <div className="input-container">
                    <label>
                      delay
                      <input type="number" className="form-control"></input>
                    </label>
                  </div>

    if (this.state.checkbox) {
      points = <div className="attr-display">
        <div className="input-group">
          {radius}
          {color}
        </div>
        <h6 className="panel-subheaders">Transitions & Animations</h6>
        <div className="input-group">
          {radius}
          {color}
        </div>
        <div className="input-group">
          {pointDelay}
        </div>
      </div>
    }

    return(
      <div className="attr-container">
        {/* <header className="toolbar toolbar-header attr-header">
          <div className="checkbox">
            <form onSubmit={this.onSubmit}>
              <label>
                <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}/>
                Points
              </label>
            </form>
          </div>
        </header> */}
        <div onClick={this.handleCheckbox} checked={this.state.checkbox}>
          <h5 className="panel-headers">Points</h5>
        </div>
        {points}
      </div>
    );
  }
}

export default Points;
