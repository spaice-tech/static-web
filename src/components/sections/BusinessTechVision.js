import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

import { useTranslation } from 'react-i18next';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}
const BusinessTechVision = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {

    const outerClasses = classNames(
        'features-tiles section mb-32',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-tiles-inner section-inner shadow-text',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        'pb-0'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
    );

    const { t } = useTranslation();

    const createTile = (image, title, description) => {
        return (
            <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                        <div className="features-tiles-item-image mb-16">
                            <div className='m-16'>
                                <Image
                                    src={image}
                                    alt={title}
                                    width={48}
                                    height={48} />
                            </div>
                        </div>
                    </div>
                    <div className="features-tiles-item-content">
                        <h4 className="mt-0 mb-8">{title}</h4>
                        <p className="m-0 text-sm">{description}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-stretch" id="features">
                <div className={innerClasses}>
                    <div className={tilesClasses}>
                        {
                            createTile(require('./../../assets/images/technology.svg').default,
                                t('businessTechVision.technology'),
                                t('businessTechVision.technologyParagraph'))
                        }
                        {
                            createTile(require('./../../assets/images/business.svg').default,
                                t('businessTechVision.business'),
                                t('businessTechVision.businessParagraph'))
                        }
                        {
                            createTile(require('./../../assets/images/view.svg').default,
                                t('businessTechVision.vision'),
                                t('businessTechVision.visionParagraph'))
                        }

                    </div>

                </div>


            </div>
        </section>
    );
}

BusinessTechVision.propTypes = propTypes;
BusinessTechVision.defaultProps = defaultProps;

export default BusinessTechVision;