// @flow

import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import debounceDecorator from '../src/debounceDecorator';
import type { InjectedProps } from '../src';

const WrappedView = debounceDecorator(300)(
  class View extends Component {
    props: InjectedProps;

    state: {
      message: string,
    } = { message: 'is anyone there?' };

    hello = () => {
      this.props.show(() => this.setState({
        message: 'hello!',
      }));
    };

    goodbye = () => {
      this.props.hide(() => this.setState({
        message: 'goodbye...',
      }));
    };

    render () {
      return (
        <div onMouseEnter={this.hello} onMouseLeave={this.goodbye}>
          {this.state.message}
        </div>
      );
    }
  }
);

storiesOf('Component')
  .add('default', () => <WrappedView />);
