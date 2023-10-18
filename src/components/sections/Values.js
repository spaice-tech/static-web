import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from '../../utils/WindowSize';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const Values = ({
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

    /*const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );*/

    const { t } = useTranslation();

    const dimensions = useWindowDimensions();

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <h3 className="mt-0 mb-12 p-0">
                        {t('values.header')}
                    </h3>
                    <p className="mt-8">
                        {t('values.paragraph')}
                    </p>

                    <div className='center-content pt-32'>
                        <Image
                            src={require(
                                dimensions.width > 640 ? './../../assets/images/SPAICE_values.svg' : './../../assets/images/SPAICE_values_mobile.png'
                                ).default}
                            alt="SPAICE values"
                            width='100%'/>
                    </div>
                    
                    <div className='mt-32 mb-64'>
                        <p className='text-large'>{t('values.teamHeader')}</p>
                        <Link to={'/about'} className="button">{t('values.meetTeam')}</Link>
                    </div>

                </div>
            </div>
        </section >
    );
}

Values.propTypes = propTypes;
Values.defaultProps = defaultProps;

export default Values;