import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { animated, useSpring } from 'react-spring';
import Header from "./../components/header";
import AboutME from "./../components/aboutme";
import Projects from "./../components/projects";
import Feature from "./../components/feature";
import Contact from "./../components/contact";
import * as d3 from "d3-ease";


const Home = props => {
    const colors = ( props.customState.newImplementation === undefined) ? { backgroundColor: props.customState.initial.webBackgroundColor, textColor: props.customState.initial.textColor } : { backgroundColor: props.customState.newImplementation.backgroundColor, textColor: props.customState.newImplementation.color }


    const [ state, setState ] = useState({ text: "" });

    const mainBackgroundColor = ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor );
    let timer;

    useEffect(() => {
        return () => {
            clearTimeout(timer);
            setState({ ...state, active: false });
        }

    }, []);

    const { left } = useSpring({
        from: {
            left: -250
        },
        to: {
            left: ( state.active ) ? 0 : -250
        },
        config: {
            duration: 700,
            easing: d3.easeQuadOut
        }
    });

    const showError = (msg) => {
        setState({ text: msg, active: !state.active });
        
        timer = setTimeout(() => {
            setState({ ...state, active: false });
        }, 2700);
    }

    return (
        <>
            <Header colors={colors} />
            <AboutME colors={colors} />
            <Projects colors={colors} showError={showError} />
            <Feature colors={colors} />
            <Contact colors={colors} />

            <animated.div className="info" style={{ left: left.to(v => `${v}px`), backgroundColor: mainBackgroundColor }}>
                <div className="left">
                    <p>{state.text}</p>
                </div>
                <div className="right">
                    <AiFillCloseCircle style={{ cursor: "pointer" }} onClick={() => setState({ ...state, active: false })} color={"#fff"} size={18}/>
                </div>
            </animated.div>
        </>
    );
}

export default Home;