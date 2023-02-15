import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';


import { useTranslation } from 'react-i18next';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {

    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: 'Custom cuts and high-quality, precise iron pieces, delivered on time.',
        paragraph: 'Oxitall Segre is a trusted provider of metal parts production with over 30 years of experience in the metallurgic industry. Our skilled professionals have the expertise and knowledge to handle a variety of cutting techniques and steels, ensuring high-quality and precise results. Choose us for reliable and successful metal parts production delivered on time.'
    };


    const { t } = useTranslation();

    const createLeftSplit = (section, image, title, description) => {
        return (
            <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary-3 fw-600 tt-u mb-8">
                        {section}
                    </div>
                    <h3 className="mt-0 mb-12">
                        {title}
                    </h3>
                    <p className="m-0">
                        {description}
                    </p>
                </div>

                <div className={
                    classNames(
                        'split-item-image center-content-mobile reveal-from-bottom',
                        imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                        src={image}
                        alt={title}
                        width={528}
                        height={396} />
                </div>
            </div>
        )
    }

    const createRightSplit = (section, image, title, description) => {
        return (
            <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary-3 fw-600 tt-u mb-8">
                        {section}
                    </div>
                    <h3 className="mt-0 mb-12">
                        {title}
                    </h3>
                    <p className="m-0">
                        {description}
                    </p>
                </div>
                <div className={
                    classNames(
                        'split-item-image center-content-mobile reveal-from-bottom',
                        imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                        src={image}
                        alt={title}
                        width={528}
                        height={396} />
                </div>
            </div>
        )
    
    }
        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <div className={splitClasses}>

                            {createLeftSplit(t('products.poseEstimation'), require('./../../assets/images/pose_estimation.png').default, t('products.poseEstimationHeader'), t('products.poseEstimationDescription'))}
                            {createRightSplit(t('products.navigation'), require('./../../assets/images/navigation.png').default, t('products.navigationHeader'), t('products.navigationDescription'))}
                            {createLeftSplit(t('products.docking'), require('./../../assets/images/docking.jpg').default, t('products.dockingHeader'), t('products.dockingDescription'))}
                            {createRightSplit(t('products.onBoard'), require('./../../assets/images/robot-manipulation.jpeg').default, t('products.onBoardHeader'), t('products.onBoardDescription'))}
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    FeaturesSplit.propTypes = propTypes;
    FeaturesSplit.defaultProps = defaultProps;

    export default FeaturesSplit;