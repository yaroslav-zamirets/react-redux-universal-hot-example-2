import React, { Component, PropTypes } from 'react';
import { CheckButton, RadioButton } from 'components';

export default class ButtonGroup extends Component {
  static propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    multiple: PropTypes.bool.isRequired,
    implyAll: PropTypes.bool,
    implyNone: PropTypes.bool,
    label: PropTypes.node,
    onChange: PropTypes.func
  }
  /*eslint-enable */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: this.props.multiple ? props.options.reduce((p, c) => ({ ...p, [c.name]: false }), {}) : ''
    };
  }

  handleChange(e) {
    const { value, onChange = () => {}, multiple } = this.props;
    let export_value = value || this.state.value;
    export_value = multiple ? { ...export_value, [e.target.name]: e.target.checked } : e.target.value;

    if (typeof value === 'undefined') {
      this.setState({ value: export_value });
    }
    onChange(e, export_value);
  }

  renderCheckboxes() {
    const { options, implyAll, implyNone, value = this.state.value } = this.props;
    return (
      <div>
        {
          options.map((c, i) =>
            <CheckButton
              {...c}
              key={i}
              checked={!!value[c.name]}
              handleChange={this.handleChange}
            />
          )
        }
        {implyAll && Object.values(value).reduce((p, c) => p && c, true) && <button disabled>All</button>}
        {implyNone && !Object.values(value).reduce((p, c) => p || c, false) && <button disabled>None</button>}
      </div>
    );
  }

  renderRadio() {
    const { options, name, value = this.state.value } = this.props;
    return (
      <div>
        {
          options.map((c, i) =>
            <RadioButton
              {...c}
              key={i}
              name={name}
              checked={value === c.value}
              handleChange={this.handleChange}
            />
          )
        }
      </div>
    );
  }

  render() {
    const { multiple, label = '' } = this.props;
    return (
      <div>
        <div className="group_label"> {label} </div>
        {
          multiple ? this.renderCheckboxes() : this.renderRadio()
        }
      </div>
    );
  }
}
