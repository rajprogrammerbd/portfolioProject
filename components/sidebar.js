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

    const { animationOne, opacityOne } = useSpring({
        from: {
            animationOne: 50,
            opacityOne: 0
        },
        to: {
            animationOne: ( state.openSidebar ) ? 0 : 50,
            opacityOne: ( state.openSidebar ) ? 1 : 0
        },
        delay: 900,
        config: {
            easing: d3.easeQuadOut,
            duration: 1000
        }
    });

    const { animationTwo, opacityTwo } = useSpring({
        from: {
            animationTwo: 50,
            opacityTwo: 0
        },
        to: {
            animationTwo: ( state.openSidebar ) ? 0 : 50,
            opacityTwo: ( state.openSidebar ) ? 1 : 0
        },
        delay: 1100,
        config: {
            easing: d3.easeQuadOut,
            duration: 1000
        }
    });


    const { animationThree, opacityThree } = useSpring({
        from: {
            animationThree: 50,
            opacityThree: 0
        },
        to: {
            animationThree: ( state.openSidebar ) ? 0 : 50,
            opacityThree: ( state.openSidebar ) ? 1 : 0
        },
        delay: 1300,
        config: {
            easing: d3.easeQuadOut,
            duration: 1000
        }
    });

    const { animationFour, opacityFour } = useSpring({
        from: {
            animationFour: 50,
            opacityFour: 0
        },
        to: {
            animationFour: ( state.openSidebar ) ? 0 : 50,
            opacityFour: ( state.openSidebar ) ? 1 : 0
        },
        delay: 1500,
        config: {
            easing: d3.easeQuadOut,
            duration: 1000
        }
    });


    const { animationFive, opacityFive } = useSpring({
        from: {
            animationFive: 50,
            opacityFive: 0
        },
        to: {
            animationFive: ( state.openSidebar ) ? 0 : 50,
            opacityFive: ( state.openSidebar ) ? 1 : 0
        },
        delay: 1700,
        config: {
            easing: d3.easeQuadOut,
            duration: 1000
        }
    });
    
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
                        <animated.li style={{ opacity: opacityOne.to(v => v), transform: animationOne.to(v => `translateX(${v}px)`)}}> <a href="https://github.com/rajprogrammerbd/">GitHub</a></animated.li>
                        <animated.li style={{ opacity: opacityTwo.to(v => v), transform: animationTwo.to(v => `translateX(${v}px)`)}}> <a href="/">Linkedin</a></animated.li>
                        <animated.li style={{ opacity: opacityThree.to(v => v), transform: animationThree.to(v => `translateX(${v}px)`)}}> <a href="">Twitter</a></animated.li>
                        <animated.li style={{ opacity: opacityFour.to(v => v), transform: animationFour.to(v => `translateX(${v}px)`)}}> <a href="/">StackOverflow</a></animated.li>
                        <animated.li style={{ opacity: opacityFive.to(v => v), transform: animationFive.to(v => `translateX(${v}px)`)}}> <a href="/">Medium</a></animated.li>
                    </ul>

                </animated.div>
            </animated.div>
        </>
    );
}

export default Sidebar;