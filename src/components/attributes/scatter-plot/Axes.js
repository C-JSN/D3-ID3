import React, {Component} from 'react';

export default class Axes extends Component {
  constructor(props){
    super(props);
    this.state={}

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
    if(this.props.axes.xAxis){
      const x_axis = Object.keys(this.props.axes.xAxis).map((attr, i) => {
      let func = 'update_x_'+ attr;
      return <div className="form-group" key={i}>
                <label>{attr}</label>
                <input key={i} type="text" className="form-control x-input" placeholder={attr}  onChange={this[func]}></input>
              </div>
      })
      const y_axis = Object.keys(this.props.axes.yAxis).map((attr, i) => {
      let func = 'update_y_'+ attr;
      return <div className="form-group" key={i}>
                <label>{attr}</label>
                <input key={i} type="text" className="form-control y-input" placeholder={attr}  onChange={this[func]}></input>
              </div>
      }) 
    return(
      <div className="axes">
        <h6 className="panel-headers">Axes</h6>
        <form onSubmit={this.handleFormSubmit} >
          {x_axis}
          {y_axis}
        <input
					type="submit"
					className="dimensions-submit"
					value="Submit"/>      
        </form>
      </div>
    );
    } else {
      return <div></div>;
    }
  }
}
