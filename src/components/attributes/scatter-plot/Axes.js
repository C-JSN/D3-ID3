import React, {Component} from 'react';
import AttributeInput from '../AttributeInput';
import update from 'immutability-helper';

export default class Axes extends Component {
  constructor(props){
    super(props);
    this.state={
      checkbox: false
    }
    //passing action creators
    this.controlNameX = this.props.controlNameX;
    this.controlXnameColor = this.props.controlXnameColor;
    this.controlXticks = this.props.controlXticks;
    this.controlColorAxisX = this.props.controlColorAxisX;

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.update_x_name = this.update_x_name.bind(this);
    this.update_x_nameColor = this.update_x_nameColor.bind(this);
    this.update_x_ticks = this.update_x_ticks.bind(this);
    this.update_x_axisColor = this.update_x_axisColor.bind(this);

    this.update_y_name = this.update_y_name.bind(this);
    this.update_y_nameColor = this.update_y_nameColor.bind(this);
    this.update_y_ticks = this.update_y_ticks.bind(this);

  }
  onSubmit(event) {
    event.preventDefault();
  }

  handleCheckbox(event) {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  handleFormSubmit(e){
    if(e.which === 13){
    console.log('this is the state from axes', this.state)
    //=============
    if(this.state.x_name){
      this.controlNameX(this.state.x_name);
    }
    if(this.state.x_nameColor){
      this.controlXnameColor(this.state.x_nameColor);
    }
    if(this.state.x_ticks){
      this.controlXticks(this.state.x_ticks);
    }
    if(this.state.x_AxisColor){
      this.controlColorAxisX(this.state.x_AxisColor);
    }

    }

  }
  //===================  x functions
  update_x_name(e){
    this.setState({
      x_name: e.target.value
    })
  }
  update_x_nameColor(e){
    this.setState({
      x_nameColor: e.target.value
    })
  }
  update_x_ticks(e){
    this.setState({
      x_ticks: e.target.value
    })
  }
  update_x_axisColor(e){
    this.setState({
      x_AxisColor: e.target.value
    })
  }
  ///----------------------

  update_y_name(e){
    this.setState({
      y_name: event.target.value
    })
  }
  update_y_nameColor(e){
    this.setState({
      y_nameColor: event.target.value
    })
  }
  update_y_ticks(e){
    this.setState({
      y_ticks: event.target.value
    })
  }

  render(){
    // if(this.props.axes.xAxis){
    //   const x_axis = Object.keys(this.props.axes.xAxis).map((attr, i) => {
    //   let func = 'update_x_'+ attr;
    //   return <div className="form-group" key={i}>
    //             <label>{attr}</label>
    //             <input key={i} type="text" className="form-control x-input" placeholder={attr}  onChange={this[func]}></input>
    //           </div>
    //   })
    //   const y_axis = Object.keys(this.props.axes.yAxis).map((attr, i) => {
    //   let func = 'update_y_'+ attr;
    //   return <div className="form-group" key={i}>
    //             <label>{attr}</label>
    //             <input key={i} type="text" className="form-control y-input" placeholder={attr}  onChange={this[func]}></input>
    //           </div>
    //   })

    let axesDisplay = <div className="attr-display"></div>
    const nameY = <div className="input-container">
                    <label>
                      name
                      <input type="text" className="form-control" onChange={this.update_y_name}></input>
                    </label>
                    
                  </div>                               
    const colorY = <div className="input-container">
                    <label>
                      color
                      <input type="text" className="form-control"></input>
                    </label>
                  </div>
    const color = <div className="input-container">
                    <label>
                      color
                      <input type="text" className="form-control"></input>
                    </label>
                  </div>                              

    const ticks = <div className="input-container">
                    <label>
                      ticks
                      <input type="number" className="form-control"></input>
                    </label>
                  </div>

    // X Axis input boxes
    const xAxis = <div className="x-axis-display">
      <div className="input-group">
        <AttributeInput 
        label="name" 
        handler={this.update_x_name} 
        type="text"
        />

        <AttributeInput 
        label="color" 
        handler={this.update_x_nameColor} 
        type="text"
        />
      </div>
      <div className="input-group">
        <AttributeInput 
        label="ticks"
        handler={this.update_x_ticks}
        type="number"
        />

        <AttributeInput 
        label="axis color"
        handler={this.update_x_axisColor}
        type="text"
        />
      </div>
    </div>

    const yAxis = <div className="y-axis-display">
      <div className="input-group">
        {nameY}
        {colorY}
      </div>
      <div className="input-group">
        {ticks}
        {color}
      </div>
    </div>

    if (this.state.checkbox) {
      axesDisplay = <div className="attr-display">
        <form onKeyUp={this.handleFormSubmit} >
          <h6 className="panel-subheaders">X-Axis</h6>
          {xAxis}
          <h6 className="panel-subheaders">Y-Axis</h6>
          {yAxis}
        </form>
      </div>
    }


    return(
      <div className="attr-container">
        {/* <header className="toolbar toolbar-header attr-header">
          <div className="checkbox">
            <form onSubmit={this.onSubmit}>
              <label>
                <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}/>
                Axes
              </label>
            </form>
          </div>
        </header> */}
        <div onClick={this.handleCheckbox} checked={this.state.checkbox}>
          <h5 className="panel-headers">Axes</h5>
        </div>
        {axesDisplay}
      </div>
    );
  }
}
