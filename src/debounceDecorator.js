// @flow

import type { Children } from 'react';

import React from 'react';
import debounce from 'lodash/debounce';
import noop from 'lodash/noop';

export type InjectedProps = {
  show: (callback: Function) => void,
  hide: (callback: Function) => void,
};

const debounceDecorator = (wait: number = 150) => (Component: Children) => {
  let canHide = false;

  const debouncedHide = debounce((cb: ?Function) => {
    if (canHide) {
      cb && cb();
    }
  }, wait);

  function show (cb: ?Function) {
    canHide = false;
    cb && cb();
  }

  function hide (cb: ?Function) {
    canHide = true;
    debouncedHide(cb);
  }

  const WrappedComponent = (props: *) => <Component {...props} show={show} hide={hide} />;
  WrappedComponent.displayName = `DebounceDecorator(${Component.displayName})`;
  WrappedComponent.defaultProps = {
    show: noop,
    hide: noop,
  };
  return WrappedComponent;
};

export default debounceDecorator;
