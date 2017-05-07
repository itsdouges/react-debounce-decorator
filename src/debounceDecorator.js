// @flow

import type { Children } from 'react';

import React from 'react';
import debounce from 'lodash/debounce';
import noop from 'lodash/noop';

export type InjectedProps = {
  show: (callback: Function) => void,
  hide: (callback: Function) => void,
};

const tooltipDebounce = (wait: number = 150) => <TProps: {}>(Component: Children) => {
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

  const WrappedComponent = (props: TProps) => <Component {...props} show={show} hide={hide} />;
  WrappedComponent.displayName = `TooltipDebounce(${Component.displayName})`;
  WrappedComponent.defaultProps = {
    show: noop,
    hide: noop,
  };
  return WrappedComponent;
};

export default tooltipDebounce;
