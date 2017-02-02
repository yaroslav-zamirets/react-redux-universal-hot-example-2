import React, { Component, PropTypes } from 'react';

export default class CheckButton extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
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
        <span className="checkbox_label">
          {label}
        </span>
        <input {...rest} onChange={handleChange} type="checkbox" />
      </div>
    );
  }
}
