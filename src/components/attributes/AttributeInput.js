import React, {Component} from 'react';

class AttributeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let label = this.props.label;
    let type = this.props.type;
    let handler = this.props.handler;

    return(
      <div className="input-container">
        <label>
          {label}
          <input type={type} className="form-control" onChange={handler} />
        </label>
      </div>
    );
  }
}

export default AttributeInput;
