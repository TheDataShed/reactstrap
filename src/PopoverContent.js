import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;
const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const PopoverContent = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-content'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverContent.propTypes = propTypes;
PopoverContent.defaultProps = defaultProps;

export default PopoverContent;
