import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { useTranslation } from 'react-i18next';
import Image from '../../components/elements/Image';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const NewsTtec = ({
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


    const { t } = useTranslation();


    return (
        <section
            {...props}
            className={outerClasses}
        >   
            <div className='news-header-ttec'>
                <div className='container'>
                    <p className='h2 text-header'>{t('news.news1.title')}</p>
                </div>
            </div>
            
            <div className="container mt-32 news-text">
                On January 24th, SPAICE, the team comprised of students and researchers from Imperial College (UK), International Max Planck Research School for Intelligent Systems (Germany), ETH Zurich (Switzerland), Stanford University (USA) and University of Oxford (UK), was <strong>awarded the second prize at the Telespazio Technology Contest</strong>, #T-TeC 2022. The ceremony was held in Brussels and presented by Leonardo's Coordinator of Space Activities and CEO of Telespazio, Luigi Pasquali, Leonardo's Chief Technology and Innovation Officer, Franco Ongaro, Telespazio's Head of Innovation and Technology Governance, Marco Brancati and the Italian astronaut Samantha Cristoforetti. Furthermore, other leading figures in the space industry attended the event, including the Director General of the European Space Agency (ESA), Josef Aschbacher, and the President of the Italian Space Agency (ASI), Giorgio Saccoccia.
                <br/><br/>
                The Telespazio Technology Contest is an Open Innovation contest promoted by Leonardo and Telespazio, with the goal of promoting space technology innovation among the younger generation. This year, the contest saw the participation of <strong>20 projects from 21 universities in 12 countries</strong>, making it a truly international event.
                <br/><br/>
                SPAICE's project aims to support On-Orbit Servicing by means of a solution based on photorealism enhancement techniques. This involves improving the realism of the synthetic (computer-generated) images of space equipment using artificial intelligence. SPAICE is poised to <strong>revolutionize the field of OOS</strong> with state-of-the-art software solutions ranging from <strong>autonomous navigation to docking maneuvers and on-board operations</strong> including satellite refuelling and repair and debris removal.
                <br/><br/>
                SPAICE received a prize worth €6,000 and now participates in a <strong>pre-incubation path in I3P</strong>, the best public business incubator in the world, supported by the incubation pathway of the European Space Agency at the Business Incubator Centre of Turin (ESA BIC Turin). The Telespazio Technology Contest has turned into a start-up incubator, and SPAICE is poised to be the next success story in the field of space technology innovation.  
                <br/><br/>
                <div className='news-image'>
                    {<Image
                    src={require('./../../assets/images/news/ttec-2.jpg').default}
                    alt={"SPAICE team at Ttec"}
                    className="news-image"/>}
                    <p>SPAICE team receiving the prize at European Space Conference.</p>  
                </div>
                  
            </div>
        </section>
    );
}

NewsTtec.propTypes = propTypes;
NewsTtec.defaultProps = defaultProps;

export default NewsTtec;