'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-switch': true,
  'mdl-js-switch': true
};

class Switch extends React.Component {

  componentDidMount(){
    const node = React.findDOMNode(this);
    mdl.upgradeElement(node, 'MaterialSwitch');
  }

  componentWillUnmount(){
    const node = React.findDOMNode(this);
    mdl.downgradeElements(node);
  }

  render(){
    const {
      className,
      ripple,
      label
    } = this.props;

    let {
      id
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-js-ripple-effect': ripple
    }, className);

    let labelField;
    if (label) {
      labelField = (<span className='mdl-switch__label'>{label}</span>);
    }

    if (!id) {
      id = '_' + Math.random().toString(36).slice(2);
    }

    return (
      <label {...this.props} htmlFor={id} className={classes}>
        <input id={id} type='checkbox' className='mdl-switch__input' />
        {labelField}
      </label>
    );
  }
}

Switch.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  ripple: React.PropTypes.bool,
  label: React.PropTypes.string
};

module.exports = Switch;