import { AiOutlineBgColors } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "./../styles/backgroundChanger.module.scss";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import * as d3 from "d3-ease";

function BackgroundChanger({ changeColors, states }) {

    const [ state, setState ] = useState({
        size: 20,
        background: "inherit",
        animation: {
            onHover: false,
            onClickedAction: false
        },
        opened: false
    });


    const { iconStyle } = useSpring({
        from: {
            iconStyle: 0
        },
        to: {
            iconStyle: 1
        }
    });

    const { Shadowcolor, scales, opacityValue, translateXValue } = useSpring({
        from: {
            Shadowcolor: "#9a9a9a",
            scales: 1,
            opacityValue: 0,
            translateXValue: -30
        },
        to: {
            Shadowcolor: ( state.animation.onHover ) ? "#000" : "#9a9a9a",
            scales: ( state.animation.onClickedAction ) ? 1.1 : 1,
            opacityValue: ( state.opened ) ? 1 : 0,
            translateXValue: ( state.opened ) ? 0 : -30
        },
        config: {
            duration: 1000,
            easing: d3.easeExpOut
        }
    });

    const hoverUp = () => {
        setState({ ...state, animation: { onHover: true } });
    }

    const hoverOut = () => {
        setState({ ...state, animation: { onHover: false } });
    }

    const mainClick = () => {
        setState({ ...state, opened: !state.opened });
    }

    const mouseDown = () => {
        setState({ ...state, animation: { ...state.animation, onClickedAction: true } });
    }

    const mouseUp = () => {
        setState({ ...state, animation: { ...state.animation, onClickedAction: false } });
    }

    const clickedFN = (obj) => {
        changeColors(obj);
        setState({ id: 1 });
    }

    return (
        <>
            <animated.div style={{ background: state.background, transform: scales.to(s => `scale(${s})`), boxShadow: Shadowcolor.to(s => `-2px 2px 3px 0px ${s}`) }} onMouseOver={hoverUp} onMouseLeave={hoverOut} onClick={mainClick} onMouseDown={mouseDown} onMouseUp={mouseUp} className={styles.bgChangerWapper}>
                <animated.span style={{ marginTop: 2, opacity: iconStyle.to(o => o) }}>{ (state.opened) ? <IoIosCloseCircleOutline color={state.color} size={state.size} /> : <AiOutlineBgColors color={state.color} size={state.size} /> }</animated.span>
                <span className={styles.shows_colorPallet}>
                    { ( state.opened ) ? (<animated.ul style={{ opacity: opacityValue.to(v => v), transform: translateXValue.to(t => `translateX(${t}px)`) }} className={styles.listed}>
                        { states.initial.defaultColors.map(obj => <li key={obj.id} onMouseDown={() => clickedFN({ background: obj.color, color: obj.textColor })} style={{ backgroundColor: `${obj.color}` }}></li> ) }
                    </animated.ul>) : null }
                </span>
            </animated.div>
        </>
    );
}

export default BackgroundChanger;