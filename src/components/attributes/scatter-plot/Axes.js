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
    this.controlNameY = this.props.controlNameY;
    this.controlYNameColor = this.props.controlYNameColor;
    this.controlYticks = this.props.controlYticks;
    this.controlColorAxisY = this.props.controlColorAxisY;

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
    this.update_y_axisColor = this.update_y_axisColor.bind(this);

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
      if(this.state.y_name){
        this.controlNameY(this.state.y_name);
      }
      if(this.state.y_nameColor){
        this.controlYNameColor(this.state.y_nameColor);
      }
      if(this.state.y_ticks){
        this.controlYticks(this.state.y_ticks);
      }
      if(this.state.y_AxisColor){
        this.controlColorAxisY(this.state.y_AxisColor)
      }
    }

  }
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
      x_ticks: parseInt(e.target.value)
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
      y_name: e.target.value
    })
  }
  update_y_nameColor(e){
    this.setState({
      y_nameColor: e.target.value
    })
  }
  update_y_ticks(e){
    this.setState({
      y_ticks: parseInt(e.target.value)
    })
  }
  update_y_axisColor(e){
    this.setState({
      y_AxisColor: e.target.value
    })
  }

  render(){
    let axesDisplay = <div className="attr-display"></div>

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

    // Y axis input boxes
    const yAxis = <div className="y-axis-display">
      <div className="input-group">
        <AttributeInput 
        label="name"
        handler={this.update_y_name}
        type="text"
        />

        <AttributeInput 
        label="color"
        handler={this.update_y_nameColor}
        type="text"
        />
      </div>
      <div className="input-group">
        <AttributeInput 
        label="ticks"
        handler={this.update_y_ticks}
        type="number"
        />

        <AttributeInput 
        label="axis color"
        handler={this.update_y_axisColor}
        type="text"
        />
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
