import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

import { useTranslation } from 'react-i18next';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
        'features-tiles section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-tiles-inner section-inner full-height center-content-desktop',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        'pb-0'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );

    const { t } = useTranslation();

    const createTile = (title, num) => {
        return (
            <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                    <div className="features-tiles-item-content has-top-divider-thick">
                        <p className="mt-8 mb-0 text-tile">{title}</p>
                        <h3 className="pl-32 mt-0 mb-8 text-color-primary-1">{num}</h3>
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
                    <SectionHeader data={{
                        title: t('tiles.headerDebrisRemoval'),
                        paragraph: t('tiles.paragraphDebrisRemoval')
                    }} stretch={true} />

                    <div className={tilesClasses}>
                        {
                            createTile(
                                t('tiles.satellitesLaunchedTitle'),
                                t('tiles.satellitesLaunchedNum'))
                        }
                        {
                            createTile(
                                t('tiles.inactiveSatellitesTitle'),
                                t('tiles.inactiveSatellitesNum'))
                        }
                        {
                            createTile(
                                t('tiles.launchesDecadeTitle'),
                                t('tiles.launchesDecadeNum'))
                        }
                        {
                            createTile(
                                t('tiles.avgLifeTitle'),
                                t('tiles.avgLifeNum'))
                        }
                        {
                            createTile(
                                t('tiles.totalDebrisTitle'),
                                t('tiles.totalDebrisNum'))
                        }
                        {
                            createTile(
                                t('tiles.trackableDebrisTitle'),
                                t('tiles.trackableDebrisNum'))
                        }

                    </div>
                    
                    
            
                </div>

                
            </div>
        </section>
    );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;