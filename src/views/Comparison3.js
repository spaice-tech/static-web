import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import ReactCompareImage from 'react-compare-image';
import { Circles } from 'react-loader-spinner';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const Comparison3 = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props
}) => {

    const outerClasses = classNames(
        'demo section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 6000);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <section {...props} className={outerClasses}>
            <div className="container mt-32 comparison center-content">
                {isLoading ? (
                    <div classNames="container">
                        <Circles
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={isLoading}
                        />
                        <span className="sr-only">Enhancing photorealism...</span>
                    </div>
                ) : (
                    <div classNames="container">
                        <ReactCompareImage leftImage={require('./../assets/images/grid.nosync/r3.jpg').default} rightImage={require('./../assets/images/grid.nosync/s3.jpg').default} />
                    </div>
                )}
            </div>
        </section>
    );
}

Comparison3.propTypes = propTypes;
Comparison3.defaultProps = defaultProps;

export default Comparison3;

