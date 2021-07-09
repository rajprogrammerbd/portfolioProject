import { useState } from "react";
import { useSpring, animated, to } from "react-spring";
import styles from "./../stylesheets/sidebar.module.scss";
import * as d3 from "d3-ease";

const Sidebar = ({ colors }) => {
    const [ state, setState ] = useState({ openSidebar: false });

    const { firstBarT, firstBarTranslateX, firstBarTranslateY, secondBarOpacity, ThirdBarT, ThirdBarTranslateX, ThirdBarTranslateY } = useSpring({
        from: {
            firstBarT: 0,
            firstBarTranslateX: 0,
            firstBarTranslateY: 0,
            secondBarOpacity: 1,
            ThirdBarT: 0,
            ThirdBarTranslateX: 0,
            ThirdBarTranslateY: 0
        },
        to: {
            firstBarT: ( state.openSidebar ) ? -45 : 0,
            firstBarTranslateX: ( state.openSidebar ) ? -3 : 0,
            firstBarTranslateY : ( state.openSidebar ) ? 2 : 0,
            secondBarOpacity: ( state.openSidebar ) ? 0 : 1,
            ThirdBarT: ( state.openSidebar ) ? 45 : 0,
            ThirdBarTranslateX: ( state.openSidebar ) ? -8 : 0,
            ThirdBarTranslateY : ( state.openSidebar ) ? -8 : 0
        },
        config: {
            duration: 200,
            easing: d3.easeLinear
        }
    });

    const { slideValue, lineColor } = useSpring({
        from: { slideValue: -100, lineColor: colors.color },
        slideValue: ( state.openSidebar ) ? 0 : -100,
        lineColor: ( state.openSidebar ) ? "white" : colors.color,
        delay: 200,
        config: {
            duration: 500,
            easing: d3.easeSinOut
        }
    });

    const { completeHover } = useSpring({
        from: {
            completeHover: 0
        },
        to: {
            completeHover: ( state.openSidebar ) ? 1 : 0
        },
        delay: 800,
        config: {
            duration: 1000
        }
    });

    const openSidebar = () => {
        setState({ ...state, openSidebar: !state.openSidebar });
    }
    
    return (
        <>
            <span className={styles.sidebar_btn} onClick={openSidebar}>
                <animated.div className={styles.bar1} style={{ backgroundColor: lineColor.to(v => `${v}`), transform: to([firstBarT, firstBarTranslateX, firstBarTranslateY], (firstBarT, firstBarTranslateX, firstBarTranslateY) => `rotate(${firstBarT}deg) translate(${firstBarTranslateX}px, ${firstBarTranslateY}px)`) }}></animated.div>
                <animated.div className={styles.bar2} style={{ backgroundColor: lineColor.to(v => `${v}`), opacity: secondBarOpacity.to(v => v) }}></animated.div>
                <animated.div className={styles.bar3} style={{ backgroundColor: lineColor.to(v => `${v}`), transform: to([ThirdBarT, ThirdBarTranslateX, ThirdBarTranslateY], (ThirdBarT, ThirdBarTranslateX, ThirdBarTranslateY) => `rotate(${ThirdBarT}deg) translate(${ThirdBarTranslateX}px, ${ThirdBarTranslateY}px)`) }}></animated.div>
            </span>
            <animated.div className={styles.fullScreenHover} style={{ right: slideValue.to(v => `${v}%`) }}>
                <animated.div className={styles.hover} style={{ opacity: completeHover.to(v => v) }}>
                    <h2 className={styles.mainTitle}><a href="/">RAJ</a></h2>
                    
                    <ul>
                        <li> <a href="/">GitHub</a></li>
                        <li> <a href="/">Linkedin</a></li>
                        <li> <a href="">Twitter</a></li>
                        <li> <a href="/">StackOverflow</a></li>
                        <li> <a href="/">Medium</a></li>
                    </ul>

                </animated.div>
            </animated.div>
        </>
    );
}

export default Sidebar;