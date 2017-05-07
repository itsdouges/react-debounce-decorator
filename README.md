# [react-debounce-decorator](https://github.com/madou/react-debounce-decorator)

[![NPM version](http://img.shields.io/npm/v/react-debounce-decorator.svg?style=flat-square)](https://www.npmjs.com/package/react-debounce-decorator)
[![NPM downloads](http://img.shields.io/npm/dm/react-debounce-decorator.svg?style=flat-square)](https://www.npmjs.com/package/react-debounce-decorator)
[![Build Status](http://img.shields.io/travis/madou/react-debounce-decorator/master.svg?style=flat-square)](https://travis-ci.org/madou/react-debounce-decorator)
[![codecov](https://codecov.io/gh/madou/react-debounce-decorator/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-debounce-decorator)
[![Dependency Status](http://img.shields.io/david/madou/react-debounce-decorator.svg?style=flat-square)](https://david-dm.org/madou/react-debounce-decorator)

Injects `hide` and `show` props into a wrapped component. Currently being used in [Guild Wars 2 Armory](https://gw2armory.com) for tooltip debouncing.

<p align="center">
  <img src="https://github.com/madou/react-debounce-decorator/blob/master/example.gif?raw=true&cb=1" style="margin:0 auto" />
</p>

## Installation

```sh
npm install react-debounce-decorator
```

## Usage

```javascript
// If using flow, grab the injected props type.
import type { InjectedProps } from 'react-debounce-decorator';

import debounceDecorator from 'react-debounce-decorator';

debounceDecorator(150)(
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
)
```

## debounceDecorator(wait: number): (Component) => Component(hide, show)

Returns a wrapped component that has injected props `show` and `hide`.

## show(callback: Function): Function

Immediately calls callback when called.

## hide(callback: Function): Function

Calls callback after the debounce duration has expired.

### React Story Book

To run the component in various modes, run the following command then go to `http://localhost:6006/`.

```bash
npm start
```

### Testing

```bash
npm test
```
