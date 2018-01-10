import React from 'react';
import PropTypes from 'prop-types';
import {styled} from 'styletron-react';
import {themeShape} from './ThemeProvider';

export default (component, ...styles) => {
  const Component = styled(component, (props, {theme = {}}) =>
    styles
      .map(
        style =>
          typeof style === 'function' ? style({...props, theme}) : style
      )
      .filter(x => !!x)
      .reduce((res, styles) => {
        Object.keys(styles).forEach(key => {
          const style = styles[key];
          if (typeof style === 'object' && res[key]) {
            Object.assign(res[key], style);
          } else {
            res[key] = style;
          }
        });
        return res;
      }, {})
  );

  Component.contextTypes = {
    ...Component.contextTypes,
    theme: PropTypes.shape(themeShape),
  };

  return Component;
};
