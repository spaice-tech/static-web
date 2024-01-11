import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import { useTranslation } from 'react-i18next';
import Image from '../elements/Image';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Team = ({
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
        'testimonial section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'testimonial-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );


    const { t } = useTranslation();


    const createProfile = (image, name, role, background, unis) => {
        return (
            <div className="tiles-item-inner">
                <Image
                    className="profile"
                    src={image}
                    alt={name}
                    width={400}
                    height={400} />

                <div className="testimonial-item-footer text-xs mt-0 mb-0 has-bottom-divider">
                    <span className="text-color-high h5"> {name}</span>
                    <span className="text-color-low"> / </span> 
                    <div className="text-color-primary-3 h5 p-0 m-0 ta-r-desktop"> {role} </div>
                </div>

                {background}
            </div>
        )
    }

    const background = (items, logos) => {
        // map over the array of objects
        return (
            <div>
                <div className="text-large pt-8 mt-16 team-background">
                    {items.map((item) => {
                        return (
                            <p className="text-sm mb-0">
                                {item}
                            </p>
                        )
                    })}
                </div>
                <div className="row-images pt-8">
                    {logos.map((logo, i) => {
                        const imageClasses = classNames(
                            (i >= 2) && "flex-image",
                            (i < 2) && "flex-image-grow"
                        );
                        return (
                            <Image
                                src={logo}
                                alt={items[i]}
                                className={imageClasses}/>

                        )
                    })}
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
                    <p className="text-header ta-c">{t('team.header')}</p>
                    <div className={tilesClasses}>

                        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                            {createProfile(
                                require('./../../assets/images/matteo.jpg'),
                                'Matteo Cuccorese',
                                'Chief Executive Officer',
                                background([
                                    t("team.matteoBackground"),
                                ],
                                [
                                    require('./../../assets/images/unina_1.png'),
                                    require('./../../assets/images/imperial_college.png')
                                ]))}
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            {createProfile(
                                require('./../../assets/images/guillem.jpeg'),
                                'Guillem Garrofé Montoliu',
                                'Chief Technology Officer',
                                background([
                                    t('team.guillemBackground'), // With experience in the research and development of robotic systems.',
                                ],
                                [
                                    require('./../../assets/images/lasalle.png'),
                                    require('./../../assets/images/imperial_college.png'),
                                    require('./../../assets/images/imprsis.png')
                                ]))}
                        </div>

                        <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                            {createProfile(
                                require('./../../assets/images/nicholas.jpg'),
                                'Nicholas Argenziano',
                                'Chief AI Scientist',
                                background([
                                    t('team.nicholasBackground'),
                                ],
                                [
                                    require('./../../assets/images/unina_1.png'),
                                    require('./../../assets/images/ethz.png')
                                ]))}
                        </div>
                        {/*<div className="tiles-item reveal-from-left" data-reveal-delay="200">
                            {createProfile(
                                require('./../../assets/images/carlota.png'),
                                'Carlota Parés Morlans',
                                'Chief Operating Officer',
                                background([
                                    t('team.carlotaBackground'),
                                ],
                                [
                                    require('./../../assets/images/lasalle.png'),
                                    require('./../../assets/images/stanford.png')
                                ]))}
                            </div>*/}
                    </div>

                    <p className="text-header ta-c pt-32">{t('team.advisory')}</p>
                    <div className={tilesClasses}>

                        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                            {createProfile(
                                require('./../../assets/images/ronald.png'),
                                'Ronald Clark',
                                '',
                                background([
                                    t('team.ronaldBackground'),
                                ],
                                [
                                    require('./../../assets/images/oxford.png'),
                                    require('./../../assets/images/imperial_college.png')
                                ]))}
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;