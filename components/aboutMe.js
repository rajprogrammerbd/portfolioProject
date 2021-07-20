import styles from "./../styles/aboutMe.module.scss";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";
import Image from 'next/image';
import aboutImg from "./../public/undraw_about_me_wa29.svg";
import * as d3 from "d3-ease";

const AboutME = ({ colors }) => {

    const [ state, setState ] = useState({ screenX: 0, screenY: 0 });
    
    useEffect(() => {
        setState({ ...state, screenX: window.innerWidth, screenY: window.innerHeight });
    }, []);

    const [ showing, setShowing ] = useState(false);

    const { ref: aboutMeRef, inView: aboutMEView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    useEffect(() => {
        setShowing(aboutMEView);
    }, [aboutMEView]);

    const { topX, opacityX } = useSpring({
        from: {
            topX: -20,
            opacityX: 0
        },
        to: {
            topX: ( showing ) ? 0 : -20,
            opacityX: ( showing ) ? 1 : 0
        },
        delay: 200,
        config: {
            duration: 700,
            easing: d3.easeLinear
        }
    });

    return (
        <>
            <div className={styles.myContent}>
                <h3 className={styles.aboutME_text} style={{ backgroundColor: ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor ) }}>About ME</h3>
                <div className={styles.aboutME_container}>
                    <div className={styles.left}>
                        <small style={{ color: "#fff", fontSize: "10px", display: "inline-block", marginBottom: "6px", borderRadius: "6px", fontWeight: "lighter", textShadow: "rgb(0 0 0 / 74%) 0px 1px 6px", padding: "4px 7px", fontWeight: "bold", backgroundColor: ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor ) }}>#ABOUT_ME</small>
                        <animated.p ref={aboutMeRef} style={{ transform: topX.to(v => `translateY(${v}px)`), opacity: opacityX.to(v => v) }} className={styles.left_p}>Hi there, I'm an enthusiastic, energetic and self-motivated person. For over 2 years, I put myself plunge within web technologies and got knowledge about different aspects of web-based technology. Building web-based applications using Node js, JavaScript, and Python. With knowledge of SQL and NoSQL database, I have got, the experience of building more complex applications. My knowledge extends and spanning to problem-solving and working with data structure &amp; algorithms. &#128512; &#128516; &#128525; &#128151;</animated.p>
                    </div>
                    <div className={styles.right}>
                        <Image className={styles.right_img} src={aboutImg} alt="about me text" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutME;