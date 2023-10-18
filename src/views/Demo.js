import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import Image from '../components/elements/Image';
import ReactCompareImage from 'react-compare-image';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const Demo = ({
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
        'demo section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className='news-header-demo'>
                <div className='container'>
                    <p className='h2 text-header'>SPAICE technology preview</p>
                </div>
            </div>

            <div className="container mt-32 news-text">

                At SPAICE, we understand the importance of training algorithms with diverse datasets that accurately reflect real-world scenarios.
                This is crucial to ensure optimal performance in on-orbit operations. Our team has developed cutting-edge deep learning algorithms
                to enhance the photorealism of synthetic datasets of a wide variety of orbiting bodies. We consider different light conditions,
                textures, materials and their corresponding specular reflections. As a result, we can train robust and precise algorithms in 
                realistic scenarios.

                <br /> <br />
                In the following interactive demo, the images on the left-hand side of the slider show the synthetic data rendered in a simulated 
                environment, while the images on its right-hand side depict the realistic pictures created with our technology. By using these 
                photorealistic datasets, we can train our algorithms to perform various on-orbit operations and services with high fidelity.

                <br /> <br />
                <div className="grid-col">

                    <div className="grid-2item">
                        <ReactCompareImage
                            leftImage={require('./../assets/images/demo.nosync/soyuz1_synthetic.png')}
                            rightImage={require('./../assets/images/demo.nosync/soyuz1_enhanced.png')} />
                    </div>

                    <div className="grid-2item">
                        <ReactCompareImage
                            leftImage={require('./../assets/images/demo.nosync/crewdragon1_synthetic.png')}
                            rightImage={require('./../assets/images/demo.nosync/crewdragon1_enhanced.png')} />
                    </div>

                    <div className="grid-2item">
                        <ReactCompareImage
                            leftImage={require('./../assets/images/demo.nosync/soyuz2_synthetic.png')}
                            rightImage={require('./../assets/images/demo.nosync/soyuz2_enhanced.png')} />
                    </div>

                    <div className="grid-2item">
                        <ReactCompareImage
                            leftImage={require('./../assets/images/demo.nosync/crewdragon2_synthetic.png')}
                            rightImage={require('./../assets/images/demo.nosync/crewdragon2_enhanced.png')} />
                    </div>

                </div>
                <p className="caption">SPAICE solution using Deep Learning algorithms for photorealism enhancement. Left images in the comparison show
                    synthetic renders from a simulated scenario, right images show enhanced images of the enhanced scenario.</p>

                Leveraging the generated realistic scenarios, SPAICE aims at developing AI solutions for a wide variety of space missions. 
                Our models generalise to different targets and operations, being compatible with different space segments adapting to multiple
                hardware and sensors. SPAICE enables in-orbit services and space exploration contribution to the space situational
                awarness. In particular, our technology includes autonomous navigation, docking manoeuvres, debris detection and tracking, 
                and robotic on-board operations. A critical requirement to succeed in these missions is to design a versatile 
                perception system, able to generalise to unseen targets. In this vein, SPAICE has developed a robust vision-based solution 
                for target identification and pose estimation. 
                SPAICE's technology allows predicting the position of the target with less than 2 cm error in 99.03% of the cases from a 
                range distance of 500 m. The images below illustrate the precision of the pose estimation considering a realistic approach 
                scenario.

                
                <br /> <br />


                <div className='grid-col'>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo.nosync/overlap2.png')}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo.nosync/overlap3.png')}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo.nosync/overlap4.png')}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo.nosync/overlap5.png')}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo.nosync/overlap6.png')}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo.nosync/overlap7.png')}
                            alt={"Pose estimation during docking manouver."} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo.nosync/overlap8.png')}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo.nosync/overlap9.png')}
                            alt={"Pose estimation during docking manouver."} />}
                    </div>
                </div>
                <p className="caption">Pose estimation using SPAICE's vision-based solution. The figures show the 
                images captured with the camera overlapped with the Launch Adapter Ring (LAR) placed at 
                the estimated position. Visualization of the precision from diverse vantage points and approach directions.</p>

                Such predictions can then be used to autonomously navigate to the target and then, perform the docking and servicing of the spacecraft.
                <div className='grid-col mt-16'>
                    {<Image
                        src={require('./../assets/images/demo.nosync/docking_pose_estimation.gif')}
                        alt={"Pose estimation during docking manouver."}
                        className='demo-image'/>}
                </div>
                <p className="caption">Pose estimation during docking manouver.</p>

            </div>
        </section>
    );
}

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;

