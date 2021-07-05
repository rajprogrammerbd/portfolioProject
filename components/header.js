import styles from "./../stylesheets/header.module.scss";
import { useEffect, useState } from "react";
import ReactRotatingText from 'react-rotating-text';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";
import * as d3 from "d3-ease";

function Header({ colors }) {
    
    const [ state, setState ] = useState({ screenWidth: 0, screenHeight: 0 });

    const [ movingState, setMovingState ] = useState({ x: 100, y: 100, a: 0, b: 0, movementForElement: [ 0, 10, 20 ], movement: [0, 20, 25] });

    const [ headerHover, setHeaderHover ] = useState(false);

    const { xPoint, yPoint, aPoint, bPoint } = useSpring({
        from: {
            xPoint: 0,
            yPoint: 0,
            aPoint: 0,
            bPoint: 0
        },
        to: {
            xPoint: movingState.x,
            yPoint: movingState.y,
            aPoint: movingState.a,
            bPoint: movingState.b
        },
        config: 2000,
        ease: d3.easeBounceIn
    });

    
    
    const { infoTop, infoOpacity } = useSpring({
        from: {
            infoTop: -20,
            infoOpacity: 0
        },
        to: {
            infoTop: ( headerHover ) ? 0 : -20,
            infoOpacity: ( headerHover ) ? 1 : 0
        },
        delay: 300,
        config: {
          duration: 500,
          easing: d3.easeQuadOut
        }
      });

      const { descriptionOne, descriptionOneOpacity } = useSpring({
          from: {
            descriptionOne: -10,
            descriptionOneOpacity: 0
          },
          to: {
            descriptionOne: ( headerHover ) ? 0 : -10,
            descriptionOneOpacity: ( headerHover ) ? 1 : 0
          },
          delay: 500,
          config: {
              duration: 500,
              easing: d3.easeLinear
          }
      });


      const { descriptionTwo, descriptionTwoOpacity } = useSpring({
        from: {
            descriptionTwo: -10,
          descriptionTwoOpacity: 0
        },
        to: {
            descriptionTwo: ( headerHover ) ? 0 : -10,
          descriptionTwoOpacity: ( headerHover ) ? 1 : 0
        },
        delay: 800,
        config: {
            duration: 500,
            easing: d3.easeLinear
        }
    });


    const { descriptionThree, descriptionThreeOpacity } = useSpring({
        from: {
            descriptionThree: -10,
            descriptionThreeOpacity: 0
        },
        to: {
            descriptionThree: ( headerHover ) ? 0 : -10,
            descriptionThreeOpacity: ( headerHover ) ? 1 : 0
        },
        delay: 1200,
        config: {
            duration: 500,
            easing: d3.easeLinear
        }
    });

    const { sunImg, sunImgOpacity } = useSpring({
        from: {
            sunImg: -10,
            sunImgOpacity: 0
        },
        to: {
            sunImg: ( headerHover ) ? 0 : -10,
            sunImgOpacity: ( headerHover ) ? 1 : 0
        },
        delay: 800,
        config: {
            duration: 1500,
            easing: d3.easeLinear
        }
    });
    
      const { ref: headerRef, inView: headerView } = useInView({
        threshold: 0,
        triggerOnce: true
      });
    
      useEffect(() => {
        setHeaderHover(headerView);
      }, [headerView]);

    const mouseMove = e => {
        setMovingState({ ...movingState, x: (e.screenX / 2.1), a: -(e.screenX / 2.1), y: (e.screenY / 5), b: -(e.screenY / 2) });
    }
    
    useEffect(() => {
        setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
            <header className={styles.header_main} ref={headerRef}>
                <div className={styles.header_top}>
                    <a href="/" style={{ color: ( colors.textColor !== "black" ) ? colors.textColor : "#ff4700" }} className={styles.main_title_link}>R<span style={{ color: ( colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : null ) }}>A</span>J</a>
                </div>
                <div className={styles.header_bottom} style={{ height: `${state.screenHeight / 1.5}px` }}>
                    <div className={styles.bottom_left}>
                        <animated.small className={styles.small_intro} style={{ transform: infoTop.to(v => `translateY(${v}px)`), opacity: infoOpacity.to(v => v), color: ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor ) }}>INTRO...</animated.small>
                        <animated.h3 style={{ transform: descriptionOne.to(v => `translateY(${v}px)`), opacity: descriptionOneOpacity.to(v => v) }} className={styles.header_description}>Hello,</animated.h3>
                        <animated.h3 style={{ transform: descriptionTwo.to(v => `translateY(${v}px)`), opacity: descriptionTwoOpacity.to(v => v) }} className={styles.header_description}>I'm Raj Dutta and </animated.h3>
                        <animated.h3 style={{ transform: descriptionThree.to(v => `translateY(${v}px)`), opacity: descriptionThreeOpacity.to(v => v) }} className={styles.header_description}>I'm <span style={{ color: "white", backgroundColor: ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor ) }}><ReactRotatingText typingInterval={200} items={['Web Expert', 'Web Designer', 'Web Developer', "Full Stack Engineer", "JavaScript Developer"]} /></span></animated.h3>
                    </div>
                    <div className={styles.bottom_right}>
                        <animated.img src="/undraw_air_support_wy1q.svg" style={{ transform: sunImg.to(v => `translateY(${v}px)`), opacity: sunImgOpacity.to(v => v), left: aPoint.to({ range: [0, state.screenWidth], output: movingState.movementForElement }), top: bPoint.to({ range: [0, state.screenHeight], output: movingState.movementForElement }) }}  className={styles.bottom_right_img_background} alt="background of the human" />
                        <animated.img src="/undraw_Web_developer_re_h7ie.svg" style={{ left: xPoint.to({ range: [-200, state.screenWidth], output: movingState.movement }), top: yPoint.to({ range: [-250, state.screenHeight], output: movingState.movement }) }} className={styles.bottom_right_img} alt="human" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;