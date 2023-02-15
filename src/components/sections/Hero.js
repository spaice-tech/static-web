import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Hero = ({
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
    torchCanvas,
    ...props
}) => {

    const [videoModalActive, setVideomodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    }

    const outerClasses = classNames(
        'hero section bottom-content-desktop background-space-debris pb-32 full-height',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top',
        bottomDivider && 'has-bottom-divider'
    );

    const { t } = useTranslation();

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container pb-64">
                {/*<div className="full-height center-content-mobile center-content-desktop reveal-from-left">
                    <Image
                        src={require('./../../assets/images/logo.svg').default}
                        alt="SPAICE"
                        width={500}
                        height={700} />}
                        <div className="container">*/}
                        <h3 className="m-0 slogan pr-128 shadow-text" data-reveal-delay="400">
                            {t('hero.slogan')}
                        </h3>
                        <Link to="features" className='button mt-16' smooth={true} spy={true}>{t('hero.learn')}</Link>
                        
            </div>
        </section>
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;