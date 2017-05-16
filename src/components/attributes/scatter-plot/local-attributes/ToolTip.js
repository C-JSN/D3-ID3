import React, { Component } from 'react';

class ToolTip extends Component {
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
    let toolTipDisplay = <div id="tooltip-display"></div>

    const text = <div className="input-container">
                    <label>
                      Text:
                      <input type="text" className="form-control"></input>
                    </label>
                 </div>

    const width = <div className="input-container">
                    <label>
                      Width:
                      <input type="number" className="form-control"></input>
                    </label>
                  </div>

    const borderStyles = <div className="input-container">
                          <label>
                            Style:
                            <select className="form-control select-input">
                               <option>dotted</option>
                               <option>dashed</option>
                               <option>solid</option>
                               <option>groove</option>
                               <option>ridge</option>
                               <option>inset</option>
                               <option>outset</option>
                               <option>none</option>
                               <option>hidden</option>
                            </select>
                          </label>
                        </div>

    const color = <div className="input-container">
                    <label>
                      Color:
                      <input type="text" className="form-control"></input>
                    </label>
                  </div>

    const padding= <div className="input-container">
                    <label>
                      Color:
                      <input type="number" className="form-control"></input>
                    </label>
                  </div>

    if (this.state.checkbox) {
      toolTipDisplay = <div id="tooltip-display">
                  <div className="input-group">
                    {text}
                  </div>
                  <h6 className="panel-headers">Border</h6>
                  <div className="input-group">
                    {width}
                    {borderStyles}
                  </div>
                  <div className="input-group">
                    {color}
                    {padding}
                  </div>
                  <hr></hr>
                </div>
    }

    return(
      <div className='tooltip-container'>
        <form onSubmit={this.onSubmit}>
          <div className="checkbox">
            <label>
              <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}></input>
              Tool Tip
            </label>
          </div>
          {toolTipDisplay}
        </form>
      </div>
    );
  }
}

export default ToolTip;
