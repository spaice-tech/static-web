import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';
import { useTranslation } from 'react-i18next';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const NewsHeaders = ({
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
        'cta section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'cta-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const { t } = useTranslation();

    const createHeader = (title, description) => {
        return (
            <div className='mt-32'>
                <div
                    className={innerClasses}
                >
                    <div className="cta-slogan">
                        <p className="m-0 text-header">
                            {title}
                        </p>
                        <p className="m-0 text-color-high">
                            {description}
                        </p>
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
            <div className='container'>
                <p className='h2'>News</p>
            </div>
            
            <div className="container mt-32">

                {createHeader(t('news.news1.title'), t('news.news1.description'))}
                {createHeader(t('news.news2.title'), t('news.news2.description'))}


            </div>
        </section>
    );
}

NewsHeaders.propTypes = propTypes;
NewsHeaders.defaultProps = defaultProps;

export default NewsHeaders;