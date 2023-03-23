import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import { useTranslation } from 'react-i18next';
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

                To train algorithms to perform on-board operations we need to ensure that the performance will not
                drop in a real scenario. Therefore, is relevant to train the algorithms with datasets that include a
                large distribution of images, in a broad range of variety of setups considering different light conditions,
                textures and materials but what is of outmost importance is to be able to train and validate the solutions
                in a realistic scenario.
                <br /> <br />
                For this reason, at SPAICE we have developed state-of-the-art deep learning algorithms to enhance
                synthetic datasets of a broad range of spacecrafts under different conditions that allow us training algorithms
                robust and precise. In the following images you can see a demonstration of how <strong>our technology applied to synthetic
                    images of simulated scenarios</strong> that we have generated (left images) can <strong>lead to more realistic scenarios</strong> creating
                photorealistic datasets (right images).
                <br /> <br />
                ----------------------------------
                <br /> <br />
                ALTERNATIVE
                <br /> <br />
                At SPAICE, we understand the importance of training algorithms with diverse datasets that accurately reflect real-world scenarios.
                This is crucial to ensure optimal performance in on-board operations. Our team has developed cutting-edge deep learning algorithms
                to enhance synthetic datasets of a wide variety of spacecrafts under various light conditions, textures, and materials. As a result,
                we can train robust and precise algorithms in realistic scenarios.

                <br /> <br />
                Our technology applies advanced photorealism techniques to synthetic images of simulated scenarios, generating more realistic
                and accurate datasets. The images on the left show the synthetic data captured in a simulated environment, while the images on the right
                depict the realistic scenarios created with our technology. By using these photorealistic datasets, we can train our algorithms to perform
                on-board operations in a range of realistic scenarios.

                <br /> <br />
                <div className="grid-col">

                    <div className="grid-item">
                        <ReactCompareImage
                            leftImage={require('./../assets/images/demo/soyuz1_synthetic.png').default}
                            rightImage={require('./../assets/images/demo/soyuz1_enhanced.png').default} />
                    </div>

                    <div className="grid-item">
                        <ReactCompareImage
                            leftImage={require('./../assets/images/demo/crewdragon1_synthetic.png').default}
                            rightImage={require('./../assets/images/demo/crewdragon1_enhanced.png').default} />
                    </div>

                    <div className="grid-item">
                        <ReactCompareImage
                            leftImage={require('./../assets/images/demo/soyuz2_synthetic.png').default}
                            rightImage={require('./../assets/images/demo/soyuz2_enhanced.png').default} />
                    </div>

                    <div className="grid-item">
                        <ReactCompareImage
                            leftImage={require('./../assets/images/demo/crewdragon2_synthetic.png').default}
                            rightImage={require('./../assets/images/demo/crewdragon2_enhanced.png').default} />
                    </div>

                </div>
                <p className="caption">SPAICE solution using Deep Learning algorithms for photorealism enhancement. Left images in the comparison show
                    synthetic renders from a simulated scenario, right images show enhanced images of the enhanced scenario.</p>

                Given the generated realistic scenarios, we aim to train AI methods to perform In Orbit servicing operations such as navigation, docking, debris
                identification, and on-board manouvers. The first step to achieve succesful results is to design a robust and veratile perception system. To do so,
                SPAICE has developed a vision-based solution for target identification and pose estimation. SPAICE's technology allows predicting the position of the
                target with less than 2cm error the 99.03% of the time. The images below illustrate the precision of the pose estimation
                from different points of view and approaching directions.
                <br /> <br />
                ----------------------------------
                <br /> <br />
                ALTERNATIVE
                <br /> <br />
                Given the realistic scenarios generated, we aim to train artificial intelligence (AI) algorithms to perform in-orbit servicing operations
                including navigation, docking, debris identification, and on-board maneuvers. A critical requirement to achieving successful outcomes is
                to design a robust and versatile perception system. Therefore, SPAICE has developed a cutting-edge vision-based solution for target identification
                and pose estimation. SPAICE's technology has demonstrated the ability to predict the target's position with an error of less than 2 cm 99.03% of the time.
                The accompanying images provide evidence of the pose estimation accuracy from diverse vantage points and approach directions.


                <div className='grid-col'>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo/soyuz1_enhanced.png').default}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo/soyuz1_enhanced.png').default}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo/soyuz1_enhanced.png').default}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo/soyuz1_enhanced.png').default}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo/soyuz1_enhanced.png').default}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo/soyuz1_enhanced.png').default}
                            alt={"Pose estimation during docking manouver."} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo/soyuz1_enhanced.png').default}
                            alt={"SPAICE team at Ttec"} />}
                    </div>
                    <div className="grid-item">
                        {<Image
                            src={require('./../assets/images/demo/soyuz1_enhanced.png').default}
                            alt={"Pose estimation during docking manouver."} />}
                    </div>
                </div>
                <p className="caption">Pose estimation using SPAICE vision-based solution. Visualization of the precision from diverse vantage points and approach directions.</p>

                Such predictions can then be used to autonomously navigate to the target and then, perform the docking and servicing of the spacecraft.
                <div className='grid-col mt-16'>
                    {<Image
                        src={require('./../assets/images/demo/docking_pose_estimation.gif').default}
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