import React, { useState } from "react";
import BackgroundChanger from "./../components/backgroundChanger";
import Sidebar from "./../components/sidebar";
import { useSpring, animated } from "react-spring";
import * as d3 from "d3-ease";
import "./../stylesheets/global.scss";

function MyApp({ Component, pageProps }) {
    const [ state, setState ] = useState({
        initial: {
            webBackgroundColor: "white",
            change: false,
            textColor: "black",
            newImplementation: { backgroundColor: '', color: '' },
            defaultColors: [ { id: 1, color: "white", textColor: 'black' }, { id: 2, color: "#7833C2", textColor: 'white' }, { id: 3, color: "#561d5e", textColor: "white" }, { id: 4, color: "#fe4c78", textColor: "white" }, { id: 5, color: "#7852ff", textColor: "white" } ]
        }
    });

    const changeColors = obj => {
        setState({ ...state, change: true, iconColor: obj.color, newImplementation: { ...state.newImplementation, backgroundColor: obj.background, color: obj.color } });
    }

    const { documentOpacity } = useSpring({
        from: {
            documentOpacity: 0
        },
        to: {
            documentOpacity: 1
        },
        config: {
            duration: 700,
            easing: d3.easeCubicIn
        }
    });

    const { backgroundColor, textColor } = useSpring({
        from: {
            backgroundColor: state.webBackgroundColor,
            textColor: 'black'
        }, 
        to: {
            backgroundColor: (state.change) ? state.newImplementation.backgroundColor : state.initial.webBackgroundColor,
            textColor: ( state.change ) ? state.newImplementation.color : state.initial.textColor
        },
        config: {
            easing: d3.easePolyIn
        }
    });

    return (
        <>
            <animated.div style={{ opacity: documentOpacity.to(o => o), backgroundColor: backgroundColor.to(b => b), color: textColor.to(c => c) }} id="body-main">
                <Component {...pageProps } customState={state} />
                <Sidebar colors={( state.newImplementation ) ? state.newImplementation : {backgroundColor: state.initial.webBackgroundColor, color: state.initial.textColor} } />
                <BackgroundChanger changeColors={changeColors} states={state} />
            </animated.div>
            
        </>
    );
}

export default MyApp;