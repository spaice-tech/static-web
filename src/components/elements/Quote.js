import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined
}

const Quote = ({
  className,
  children,
  src,
  width,
  height,
  alt,
  ...props
}) => {

  

  return (
    <div className='quote'>
        <div className='vertical-bar'/>
        <div>
            {children}
        </div>
    </div>
  );
}

Quote.propTypes = propTypes;
Quote.defaultProps = defaultProps;

export default Quote;