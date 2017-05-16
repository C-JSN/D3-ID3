import React, {Component} from 'react';

export default class Axes extends Component {
  constructor(props){
    super(props);
    this.state={
      checkbox: false
    }

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.update_x_exist  = this.update_x_exist.bind(this);
    this.update_x_name = this.update_x_name.bind(this);
    this.update_x_nameColor = this.update_x_nameColor.bind(this);
    this.update_x_ticks = this.update_x_ticks.bind(this);

    this.update_y_exist  = this.update_y_exist.bind(this);
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
    e.preventDefault();
  }
  update_x_exist(e){
    this.setState({
      x_exist: event.target.value
    })
  }
  update_x_name(e){
    this.setState({
      x_name: event.target.value
    })
  }
  update_x_nameColor(e){
    this.setState({
      x_nameColor: event.target.value
    })
  }
  update_x_ticks(e){
    this.setState({
      x_ticks: event.target.value
    })
  }
  ///----------------------
  update_y_exist(e){
    this.setState({
      x_exist: event.target.value
    });
  }
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

    let axesDisplay = <div className="axes-display"></div>

    const xAxis = <div className="x-axis-display">
      <div className="attr-input">
        <label>
          Name:
          <input type="text" className="form-control"></input>
        </label>
        <label>
          Color:
          <input type="text" className="form-control"></input>
        </label>
      </div>
      <div className="attr-input">
        <label>
          Ticks:
          <input type="number" className="form-control"></input>
        </label>
        <label>
          Color:
          <input type="text" className="form-control"></input>
        </label>
      </div>
    </div>

    const yAxis = <div className="y-axis-display">
      <div className="attr-input">
        <label>
          Name:
          <input type="text" className="form-control"></input>
        </label>
        <label>
          Color:
          <input type="text" className="form-control"></input>
        </label>
      </div>
      <div className="attr-input">
        <label>
          Ticks:
          <input type="number" className="form-control"></input>
        </label>
        <label>
          Color:
          <input type="text" className="form-control"></input>
        </label>
      </div>
    </div>

    if (this.state.checkbox) {
      axesDisplay = <div className="axes-display">
        <form onSubmit={this.handleFormSubmit} >
          <div className="input-group">
            <div>
              <h6 className="panel-headers">X-Axis</h6>
              {xAxis}
            </div>
            <div>
              <h6 className="panel-headers">Y-Axis</h6>
              {yAxis}
            </div>
          </div>
        </form>
        <hr></hr>
      </div>
    }


    return(
      <div className="axes-container">
        <div className="checkbox">
          <form onSubmit={this.onSubmit}>
            <label>
              <input type="checkbox" onChange={this.handleCheckbox} checked={this.state.checkbox}></input>
              Axes
            </label>
          </form>
        </div>
        {axesDisplay}
      </div>
    );
  }
}
