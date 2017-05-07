// @flow

import React from 'react';

export const stubComponent = (displayName: string) => {
  const component = ({ children }: any) => <div>{children}</div>;
  component.displayName = displayName;
  return component;
};
