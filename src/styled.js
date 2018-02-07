import React from 'react';
import {styled} from 'styletron-react-compose';

export default (component, ...styles) => styled(
  (props, {theme = {}}) =>
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
      }, {}),
  component,
)
