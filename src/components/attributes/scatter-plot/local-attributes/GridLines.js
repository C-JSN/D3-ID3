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
    let gridLineDisplay = <div className="attr-display"></div>

    const width = <div className="input-container">
                    <label>
                      width
                      <input type="number" className="form-control"></input>
                    </label>
                  </div>

    const color = <div className="input-container">
                    <label>
                      color
                      <input  type="text" className="form-control"></input>
                    </label>
                  </div>

    if (this.state.checkbox) {
      gridLineDisplay = <div className="attr-display">
                          <h6 className="panel-subheaders">X-GridLines</h6>
                          <div className="input-group">
                            {width}
                            {color}
                          </div>
                          <h6 className="panel-subheaders">Y-Gridlines</h6>
                          <div className="input-group">
                            {width}
                            {color}
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
                Grid Lines
              </label>
            </form>
          </div>
        </header> */}
        <div onClick={this.handleCheckbox} checked={this.state.checkbox}>
          <h5 className="panel-headers">Grid Lines</h5>
        </div>
        {gridLineDisplay}

      </div>
    );
  }
}

export default GridLines;
