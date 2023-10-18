import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { useTranslation } from 'react-i18next';
import Image from '../../components/elements/Image';
import Quote from '../../components/elements/Quote';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const NewsPSW = ({
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
        'news section center-content-mobile reveal-from-bottom',
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
            <div className='news-header-psw'>
                <div className='container'>
                    <p className='h2 text-header mb-0'>{t('news.news2.title')}</p>
                    <p className='text-date'>10th of March</p>
                </div>
            </div>
            
            <div className="container mt-32 news-text">
            The SPAICE team recently attended the highly anticipated Paris Space Week 2023, one of the most 
            significant B2B trade events dedicated to the space industry. The event was an opportunity for 
            our team to showcase our AI-based technology for autonomous space operations, spearheaded by our 
            CEO, Matteo Cuccorese, and CTO, Guillem Garrofé.
            <br/><br/>
            Furthermore, our CEO was invited to participate in a dedicated panel on Unify Space, alongside 
            representatives from Airbus and Asitech. During this event, Matteo discussed the significance of 
            collaboration between leading companies and startups to accelerate innovation, citing our example 
            as a model.
            <br/><br/>
            <Quote>
            "The future of the space industry relies on the collaboration between 
            established companies and startups, as well as closer partnerships with academia. Startups bring 
            the agility and fresh thinking necessary to drive innovation forward, while established companies 
            provide the infrastructure and resources needed to scale and execute on new ideas."  
            </Quote>
            <br/><br/>
            <div className='news-image'>
                {<Image
                src={require('./../../assets/images/news/psw/unify_panel.jpg')}
                alt={"SPAICE team at PSW"}
                className="news-image"/>}
                <p>Matteo Cuccorese with colleagues from Airbus and Asitech during the Unify Space panel.</p>  
            </div>
            At SPAICE, we pride ourselves on our commitment to collaboration and innovation. We believe that 
            our technology, which provides AI solutions for sustainability in space, has the potential to 
            transform the space industry as we know it.
            <br/><br/>
            During the Paris Space Week, we were thrilled to welcome numerous visitors to our booth, including 
            leading space suppliers, sponsors, exciting startups, and investors. Our team engaged in numerous 
            conversations with attendees, discussing the potential for collaboration and investment in our 
            groundbreaking technology.
            <br/><br/>
            <div className='news-image'>
                {<Image
                src={require('./../../assets/images/news/psw/booth.JPG')}
                alt={"SPAICE team at PSW"}
                className="news-image"/>}
                <p>SPAICE team at their booth at Paris Space Week.</p>  
            </div>
            The reception we received was truly phenomenal, with many expressing their excitement about the 
            possibilities that our technology presents for the future of the space industry. It was incredibly 
            gratifying to see our technology receive such interest and recognition, and we are grateful for the 
            opportunity to have been a part of such a dynamic event.
            <br/><br/>  
            If you weren't able to attend the Paris Space Week, don't hesitate to reach out to us to learn more 
            about our AI-based technology for sustainable and autonomous space maneuvers and operations. Our team 
            is always excited to discuss potential collaborations and partnerships.
            <br/><br/>
            Overall, our experience at the Paris Space Week 2023 was incredibly impactful, and we are looking forward 
            to attending next year's event to further advance our mission of making space more sustainable and 
            accessible for all.
                <br/><br/>
                
                  
            </div>
        </section>
    );
}

NewsPSW.propTypes = propTypes;
NewsPSW.defaultProps = defaultProps;

export default NewsPSW;