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
        './../assets/images/synthetic.nosync/',
        false,
        /\.(jpg|png)$/
        ///^\.\/s\d+\.png$/ // Regular expression to match image file extensions
    );

    const imagePaths = imageContext.keys();

    // create state of view
    const [demoState, setDemoState] = useState({
        showingEnhancement: false,
        filename: 'crewdragon_105',
        isLoading: false,
        images: imagePaths.map((imagePath) => imageContext(imagePath)).sort(() => Math.random() - 0.5)
    });

    // sort imagePahts by number
    /*imagePaths.sort((a, b) => {
        const aNum = parseInt(a.match(/\d+/)[0]);
        const bNum = parseInt(b.match(/\d+/)[0]);
        return aNum - bNum;
    });*/

    
    const handleImageClick = (imgPath) => {

        // Split the path into directory and filename
        const parts = imgPath.split('/');
        const filename = parts[parts.length - 1];

        // Find the position of the last point in the filename
        const lastDotIndex = filename.lastIndexOf('.');

        // Extract the parts before and after the last point
        const afterLastDot = filename.slice(lastDotIndex);
        let beforeLastDot = filename.slice(0, lastDotIndex);
        const secondLastDotIndex = beforeLastDot.lastIndexOf('.');
        beforeLastDot = beforeLastDot.slice(0, secondLastDotIndex);

        // Change the first letter to 's'
        const syntheticFilename = beforeLastDot + afterLastDot;
        const realFilename = 'r' + beforeLastDot.substring(1) + afterLastDot;
        
        setDemoState({
            ...demoState,
            showingEnhancement: true,
            filename: beforeLastDot,
            isLoading: true
        });
    };

    const backToMain = () => {
        setDemoState({
            ...demoState,
            showingEnhancement: false,
            filename: 'crewdragon_105',
            isLoading: false,
            images: imagePaths.map((imagePath) => imageContext(imagePath)).sort(() => Math.random() - 0.5)
        });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDemoState({
                ...demoState,
                isLoading: false
            });
        }, 2000);

        return () => clearTimeout(timeout);
    }, [demoState]);

    // The path is going to be './../assets/images/grid.nosync/r<imageindex+1>.jpg'

    console.log("leftImage: ./../assets/images/synthetic.nosync/" + demoState.filename + '.png');
    console.log("rightImage: ./../assets/images/enhanced.nosync/" + demoState.filename + '.jpg');
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
                    {<ReactCompareImage 
                        leftImage={require('./../assets/images/synthetic.nosync/' + demoState.filename + '.png')} 
                        rightImage={require('./../assets/images/enhanced.nosync/' + demoState.filename + '.jpg')} />}
                    <div className="container grid-caption">
                        <p className='left-content'>Synthetic</p>
                        <p className='right-content'>Photorealistic</p>
                    </div>
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
                    Click on a synthetic image to see its photorealistic counterpart.
                    {<div className="grid-col">
                        {demoState.images.map((img, index) => (
                            <div className="grid-item" key={index} onClick={() => handleImageClick(img)}>
                                {<Image src={img} alt={`${index}`} />}
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

