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
    let toolTipDisplay = <div className="attr-display"></div>

    const text = <div className="input-container">
                    <label>
                      text
                      <input type="text" className="form-control"></input>
                    </label>
                 </div>

    const width = <div className="input-container">
                    <label>
                      width
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
                      color
                      <input type="text" className="form-control"></input>
                    </label>
                  </div>

    const padding= <div className="input-container">
                    <label>
                      color
                      <input type="number" className="form-control"></input>
                    </label>
                  </div>

    if (this.state.checkbox) {
      toolTipDisplay = <div className="attr-display">
                  <div className="input-group">
                    {text}
                  </div>
                  <h6 className="panel-subheaders">Border</h6>
                  <div className="input-group">
                    {width}
                    {borderStyles}
                  </div>
                  <div className="input-group">
                    {color}
                    {padding}
                  </div>
                </div>
    }

    return(
      <div className='attr-container'>
        {/* <header className="toolbar toolbar-header attr-header">
          <div className="checkbox">
            <form onSubmit={this.onSubmit}>
              <label>
                <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}/>
                Tool Tip
              </label>
            </form>
          </div>
        </header> */}
        <div onClick={this.handleCheckbox} checked={this.state.checkbox}>
          <h5 className="panel-headers">Tool Tip</h5>
        </div>
        {toolTipDisplay}
      </div>
    );
  }
}

export default ToolTip;
