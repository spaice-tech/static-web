import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const SectionHeader = ({
  className,
  data,
  link,
  children,
  tag,
  stretch,
  ...props
}) => {

  const classes = classNames(
    'section-header',
    className
  );

  const containerClasses = classNames(
    stretch && 'container-stretch',
    !stretch && 'container'
);

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) &&
        <div
          {...props}
          className={classes}
          id={"section-header mb-0"}
        >
          <div className={containerClasses}>
            {children}
            {data.title &&
              <Component className={
                classNames(
                  'mt-0',
                  data.paragraph ? 'mb-16' : 'mb-0'
                )}>{data.title}</Component>
            }
            {data.paragraph && !link &&
              <p className="m-0 text-large text-color-high">{data.paragraph}</p>
            }
            {data.paragraph && link &&
              <Link className="m-0 text-large button" to={link}>{data.paragraph}</Link>
            }
          </div>
        </div>
      }
    </>
  );
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;