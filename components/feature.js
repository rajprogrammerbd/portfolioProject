import styles from "./../styles/feature.module.scss";
import { useState, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { animated, useSpring } from "react-spring";
import { useInView } from 'react-intersection-observer';
import * as d3 from "d3-ease";

function Feature({ colors }) {

    const mainBackgroundColor = ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor );

    const [ state, setState ] = useState(false);

    const { ref: featureRef, inView: featureView } = useInView({
        threshold: 0,
        triggerOnce: true
      });

      useEffect(() => {
        setState(featureView);
      }, [featureView]);

    const { top, opacity } = useSpring({
        from: {
            top: -20,
            opacity: 0
        },
        to: {
            top: ( state ) ? 0 : -20,
            opacity: ( state ) ? 1 : 0
        },
        delay: 300,
        config: {
            duration: 1200,
            easing: d3.easeLinear
        }
    });

    return (
        <>
            <div className={styles.feature_work}>
                <h3 className={styles.featured_work_main_title} style={{ backgroundColor: mainBackgroundColor }}>Feature Work</h3>
                <animated.div style={{ transform: top.to(v => `translateY(${v}px)`), opacity: opacity.to(v => v) }} ref={featureRef} className={styles.feature_container}>
                    <div className={styles.items}>
                        <span style={{ backgroundColor: mainBackgroundColor }}><CgWebsite color="#fff" size={20} /></span>
                        <h4>Web Design</h4>
                        <p>Providing pixel-perfect design with realistic animation and good design. With good skills in building user interfaces, I can provide user-friendly, easy-to-understand, and flexible.</p>
                    </div>
                    <div className={styles.items}>
                        <span style={{ backgroundColor: mainBackgroundColor }}><MdDeveloperMode color="#fff" size={20} /></span>
                        <h4>Web Development</h4>
                        <p>Building server and providing backend services with Node.js and express.js and also provide extra facilities and complex functionality with securities and SQL & NoSQL Database.</p>
                    </div>
                    <div className={styles.items}>
                        <span style={{ backgroundColor: mainBackgroundColor }}><FaMobileAlt color="#fff" size={20} /></span>
                        <h4>Web Application</h4>
                        <p>Building web applications with complexity, sustainability and provide facilities and securities features. Providing SQL & NoSQL facilities with a secure way and user-friendly interface.</p>
                    </div>
                </animated.div>
            </div>
        </>
    );
}

export default Feature;