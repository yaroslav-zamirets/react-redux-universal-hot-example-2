import React, { Component, PropTypes } from 'react';

export default class RadioButton extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.node,
    handleChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { label, handleChange, ...rest } = this.props;
    return (
      <div>
        <span className="radio_label">
          {label}
        </span>
        <input {...rest} onChange={handleChange} type="radio" />
      </div>
    );
  }
}
