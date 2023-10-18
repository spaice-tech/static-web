import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
//import { useTranslation } from 'react-i18next';
import Image from '../components/elements/Image';
//import ReactCompareImage from 'react-compare-image';
import ReactCompareImage from 'react-compare-image';
import { Circles } from 'react-loader-spinner';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//import { Link } from 'react-router-dom';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}



const SecondDemo = ({
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

    const imageContext = require.context(
        './../assets/images/grid.nosync/',
        false,
        /^\.\/s\d+\.png$/ // Regular expression to match image file extensions
    );

    const imagePaths = imageContext.keys();

    // create state of view
    const [demoState, setDemoState] = useState({
        showingEnhancement: false,
        imageIndex: 0,
        isLoading: false
    });

    // sort imagePahts by number
    imagePaths.sort((a, b) => {
        const aNum = parseInt(a.match(/\d+/)[0]);
        const bNum = parseInt(b.match(/\d+/)[0]);
        return aNum - bNum;
    });

    const images = imagePaths.map((imagePath) => imageContext(imagePath));

    const handleImageClick = (index) => {
        // Perform any additional logic or navigation here
        console.log('Image clicked:', index);
        setDemoState({
            showingEnhancement: true,
            imageIndex: index,
            isLoading: true
        });
    };

    const backToMain = () => {
        setDemoState({
            showingEnhancement: false,
            imageIndex: 0,
            isLoading: false
        });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDemoState({
                ...demoState,
                isLoading: false
            });
        }, 6000);

        return () => clearTimeout(timeout);
    }, [demoState]);

    // The path is going to be './../assets/images/grid.nosync/r<imageindex+1>.jpg'
    const comparisonView = (
        <div className="container mt-32 comparison center-content">
            {demoState.isLoading ? (
                <div className="container">
                    <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={demoState.isLoading}
                    />
                    <span className="sr-only">Enhancing photorealism...</span>
                </div>
            ) : (
                <div className="container left-content">
                    <ArrowBackIcon onClick={() => backToMain()}/>
                    <ReactCompareImage 
                        leftImage={require('./../assets/images/grid.nosync/r' + (demoState.imageIndex+1) + '.png')} 
                        rightImage={require('./../assets/images/grid.nosync/s' + (demoState.imageIndex+1) + '.png')} />
                </div>
            )}
        </div>
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <p className="h2">SPAICE's photorealism enhancement</p>
            </div>
        
            {demoState.showingEnhancement ? 
            (
                comparisonView
            ) : (
                <div className="container mt-32">
                    {<div className="grid-col">
                        {images.map((img, index) => (
                            <div className="grid-item" key={index} onClick={() => handleImageClick(index)}>
                                <Image src={img} alt={`${index}`} />
                            </div>
                        ))}
                    </div>}
                </div>
            )}
        </section>
    );
}

SecondDemo.propTypes = propTypes;
SecondDemo.defaultProps = defaultProps;

export default SecondDemo;

