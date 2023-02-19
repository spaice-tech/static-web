import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

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

   
    const outerClasses = classNames(
        'hero section bottom-content-desktop background-space-debris pb-32 full-height',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );


    const { t } = useTranslation();

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container full-height bottom-content-desktop bottom-content-mobile">
                
                <h3 className="m-0 slogan pr-128 mb-8 shadow-text" data-reveal-delay="400">
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