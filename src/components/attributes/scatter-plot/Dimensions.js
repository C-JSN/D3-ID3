import React, {Component} from 'react';

class Dimensions extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkbox: false
    };

    //passing action creators
    this.controlWidth = this.props.controlWidth;
    this.controlHeight = this.props.controlHeight;
    this.controlTop = this.props.controlTop;
    this.controlBottom = this.props.controlBottom;

    //binding component methods
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.controlWidth = this.props.controlWidth;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.update_top = this.update_top.bind(this);
    this.update_bottom = this.update_bottom.bind(this);
    this.update_right = this.update_right.bind(this);
    this.update_left = this.update_left.bind(this);
    this.updateResponsive = this.updateResponsive.bind(this);
    
  }

  onSubmit(event) {
    event.preventDefault();
  }

  handleCheckbox(event) {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  updateWidth(e){
    e.preventDefault();
    this.setState({
      width: parseInt(e.target.value) || ''
    })
  }
  updateHeight(e){
    this.setState({
      height: parseInt(e.target.value)
    })
  }
  update_top(e){
    
    // this.setState({
    //   margin: {
    //     top: parseInt(e.target.value)
    //   }
    // })
    
    this.setState({
      margin:{
        ...this.state.margin,
        top: parseInt(e.target.value)
      }
    })
  }

  update_bottom(e){
    
    // this.setState({
    //  margin: {
    //     bottom: parseInt(e.target.value)
    //   }
    // })
    this.setState({
      margin:{
        ...this.state.margin,
        bottom: parseInt(e.target.value)
      }
    })

  }
  update_right(e){
    this.setState({
      right: parseInt(e.target.value)
    })
  }
  update_left(e){
    this.setState({
      left: parseInt(e.target.value)
    })
  }
  updateResponsive(e){
    
    this.setState({
      responsiveSize: e.target.checked
    })
  }

  //When user hits enter action creators are called with all the user inputs
   handleFormSubmit(e){

    if (e.which === 13) {
      console.log('this is the local state passed', this.state);
 
      if(this.state.margin && this.state.margin.top){
        this.controlTop(this.state.margin.top);
      } 
      if(this.state.margin && this.state.margin.bottom){
        this.controlBottom(this.state.margin.bottom);
      } 

      if(this.state.width){
        this.controlWidth(this.state.width);
      } 
      if(this.state.height){
        this.controlHeight(this.state.height);
      }
    }
  }

  render(){
    let dimensionsDisplay = <div className="attr-display"></div>

    const width = <div className="input-container">
                    <label>
                      width
                      <input type="number" className="form-control" onChange={this.updateWidth} />
                    </label>
                  </div>

    const height = <div className="input-container">
                      <label>
                        height
                        <input type="number" className="form-control" onChange={this.updateHeight} />
                      </label>
                    </div>

    const top = <div className="input-container">
                  <label>
                    top
                    <input type="number" className="form-control" onChange={this.update_top} />
                  </label>
                </div>

    const right = <div className="input-container">
                    <label>
                      right
                      <input type="number" className="form-control" onChange={this.update_right} />
                    </label>
                  </div>

    const bottom = <div className="input-container">
                    <label>
                      bottom
                      <input type="number" className="form-control" onChange={this.update_bottom} />
                    </label>
                  </div>

    const left = <div className="input-container">
                  <label>
                    left
                    <input type="number" className="form-control" onChange={this.update_left} />
                  </label>
                </div>
    const responsiveSize = <div className="checkbox">
                <label style={{color: '#9da5b4'}}>
                  {/* this checkbox will still need it's own handler */}
                  <input type="checkbox" />
                  responsive resize
                </label>
            </div>

    if (this.state.checkbox) {
      dimensionsDisplay = <div className="attr-display">
        <div className="input-group">
            {width}
            {height}
        </div>
        <h6 className="panel-subheaders">Margin</h6>
        <div className="input-group">
            {top}
            {right}
        </div>
        <div className="input-group">
            {bottom}
            {left}
        </div>
        {responsiveSize}
      </div>
    }
    return(
      <div>
        <div className="attr-container">
          {/* <header className="toolbar toolbar-header attr-header"> */}
            {/* <div className="checkbox"> */}
              {/* <form onSubmit={this.onSubmit}> */}
                {/* <label> */}
                  <div onClick={this.handleCheckbox} checked={this.state.checkbox}>
                    <h5 className="panel-headers">SVG Dimensions</h5>
                  </div>
                  {/* SVG Dimensions */}
                {/* </label> */}
              {/* </form> */}
            {/* </div> */}
          {/* </header> */}
          <form onKeyUp={this.handleFormSubmit}>
            {dimensionsDisplay}
          </form>
        </div>
      </div>
    );
  }
}

export default Dimensions;
