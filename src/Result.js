/**
 * @copyright 2015, Prometheus Research, LLC
 */

import autobind from 'autobind-decorator';
import React, {PropTypes} from 'react';
import * as Stylesheet from 'react-stylesheet';
import {style as styleHostComponent} from 'react-dom-stylesheet';

export default class Result extends React.Component {
  static propTypes = {
    focus: PropTypes.bool,
    result: PropTypes.object,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
  };

  static stylesheet = Stylesheet.create(
    {
      Root: 'li',
    },
    {styleHostComponent},
  );

  render() {
    let {focus, result, ...props} = this.props;
    let {Root} = this.constructor.stylesheet;
    return (
      <Root
        style={{cursor: 'pointer'}}
        tabIndex={-1}
        state={{focus: focus}}
        onClick={this._onClick}>
        {this.props.result.title}
      </Root>
    );
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.result.id != this.props.result.id || nextProps.focus !== this.props.focus // eslint-disable-line eqeqeq
    );
  }

  @autobind _onClick() {
    this.props.onClick(this.props.result);
  }
}
