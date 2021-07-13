import { Fragment, useState, useEffect } from "react";
import Link from 'next/link';
import { useSpring, animated } from "react-spring";
import { useInView } from 'react-intersection-observer';
import styles from "./../stylesheets/projects.module.scss";
import * as d3 from "d3-ease";

function Projects({ colors, showError }) {

    const [ state, setState ] = useState({
        items: [
            { id: 1, name: "Stopwatch", img: "/stopwatch.JPG", hover: false, technology: "Webpack", link: "https://rajprogrammerbd.github.io/stopwatch/" },
            { id: 2, name: "Web-Timer", img: "/Web_timer.jpg", hover: false, technology: "ReactJS", link: 'https://rajprogrammerbd.github.io/web-timer/' },
            { id: 3, name: "Money Heist", img: "/money_heist.jpg", hover: false, technology: "ReactJS", link: 'https://rajprogrammerbd.github.io/money_heist/' },
            { id: 4, name: "Custom Express Server", img: "/express_backend.JPG", hover: false, technology: "ExpressJS", link: "https://github.com/rajprogrammerbd/custom-backend" }
        ]
    });
    
    const mainBackgroundColor = ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor );

    const mouseHoverIn = id => {
        if ( state.items.find(obj => obj.id === id) === undefined ) return;

        const items = state.items.map(obj => {
            if ( obj.id === id ) {
                obj.hover = true;
            }
            return obj;
        });

        setState({ ...state, items });
    }

    const mouseHoverOut = id => {
        if ( state.items.find(obj => obj.id === id) === undefined ) return;

        const items = state.items.map(obj => {
            if ( obj.id === id ) {
                obj.hover = false;
            }
            return obj;
        });

        setState({ ...state, items });
    }

    const [ discoverBtn, setDiscoverBtn ] = useState(false);

    const { scaleUP } = useSpring({
        from: {
            scaleUP: 1
        },
        to: {
            scaleUP: ( discoverBtn ) ? 1.08 : 1
        },
        config: {
            duration: 200
        }
    });

    const basic_color = ( colors.backgroundColor === "white" ) ? "rgb(255, 71, 0)" : "#fff";
    
    const { firstBackground, secondBackground, ThirdBackground, forthBackground, firstTextColor, secondTextColor, thirdTextColor, forthTextColor, firstTextShadow, secondTextShadow, thirdTextShadow, forthTextShadow, firstWidth, secondWidth, thirdWidth, forthWidth, firstHoverImgOpacity, secondHoverImgOpacity, thirdHoverImgOpacity, forthHoverImgOpacity, firstHoverImgtop, secondHoverImgtop, thirdHoverImgtop, forthHoverImgtop } = useSpring({
        from: {
            firstBackground: "rgba(255, 255, 255, 0)",
            secondBackground: "rgba(255, 255, 255, 0)",
            ThirdBackground: "rgba(255, 255, 255, 0)",
            forthBackground: "rgba(255, 255, 255, 0)",

            firstWidth: 0,
            secondWidth: 0,
            thirdWidth: 0,
            forthWidth: 0,

            firstHoverImgOpacity: 0,
            secondHoverImgOpacity: 0,
            thirdHoverImgOpacity: 0,
            forthHoverImgOpacity: 0,


            firstHoverImgtop: -20,
            secondHoverImgtop: -20,
            thirdHoverImgtop: -20,
            forthHoverImgtop: -20,
            
            firstTextColor: basic_color,
            secondTextColor: basic_color,
            thirdTextColor: basic_color,
            forthTextColor: basic_color,

            firstTextShadow: "rgb(255, 255, 255, 0) 1px 2px 6px",
            secondTextShadow: "rgb(255, 255, 255, 0) 1px 2px 6px",
            thirdTextShadow: "rgb(255, 255, 255, 0) 1px 2px 6px",
            forthTextShadow: "rgb(255, 255, 255, 0) 1px 2px 6px"
        },
        firstBackground: ( state.items[0].hover ) ? mainBackgroundColor : "rgba(255, 255, 255, 0)",
        secondBackground: ( state.items[1].hover ) ? mainBackgroundColor : "rgba(255, 255, 255, 0)",
        ThirdBackground: ( state.items[2].hover ) ? mainBackgroundColor : "rgba(255, 255, 255, 0)",
        forthBackground: ( state.items[3].hover ) ? mainBackgroundColor : "rgba(255, 255, 255, 0)",

        firstWidth: ( state.items[0].hover ) ? 100 : 0,
        secondWidth: ( state.items[1].hover ) ? 100 : 0,
        thirdWidth: ( state.items[2].hover ) ? 100 : 0,
        forthWidth: ( state.items[3].hover ) ? 100 : 0,

        firstTextColor: ( state.items[0].hover ) ? "#fff" : basic_color,
        secondTextColor: ( state.items[1].hover ) ? "#fff" : basic_color,
        thirdTextColor: ( state.items[2].hover ) ? "#fff" : basic_color,
        forthTextColor: ( state.items[3].hover ) ? "#fff" : basic_color,
        
        firstTextShadow: ( state.items[0].hover ) ? "rgb(0, 0, 0, 1) 1px 2px 6px" : "rgb(255, 255, 255, 0) 1px 2px 6px",
        secondTextShadow: ( state.items[1].hover ) ? "rgb(0, 0, 0, 1) 1px 2px 6px" : "rgb(255, 255, 255, 0) 1px 2px 6px",
        thirdTextShadow: ( state.items[2].hover )  ? "rgb(0, 0, 0, 1) 1px 2px 6px" : "rgb(255, 255, 255, 0) 1px 2px 6px",
        forthTextShadow: ( state.items[3].hover ) ? "rgb(0, 0, 0, 1) 1px 2px 6px" : "rgb(255, 255, 255, 0) 1px 2px 6px",

        firstHoverImgOpacity: ( state.items[0].hover ) ? 1 : 0,
        secondHoverImgOpacity: ( state.items[1].hover ) ? 1 : 0,
        thirdHoverImgOpacity: ( state.items[2].hover ) ? 1 : 0,
        forthHoverImgOpacity: ( state.items[3].hover ) ? 1 : 0,

        firstHoverImgtop: ( state.items[0].hover ) ? 0 : -20,
        secondHoverImgtop: ( state.items[1].hover ) ? 0 : -20,
        thirdHoverImgtop: ( state.items[2].hover ) ? 0 : -20,
        forthHoverImgtop: ( state.items[3].hover ) ? 0 : -20,

        config: {
            easing: d3.easeQuadOut,
            duration: 450
        }
    });

    const listsBackground = [firstBackground, secondBackground, ThirdBackground, forthBackground];
    const listTextColors = [firstTextColor, secondTextColor, thirdTextColor, forthTextColor];
    const listTextShadow = [firstTextShadow, secondTextShadow, thirdTextShadow, forthTextShadow];
    const listWidth = [firstWidth, secondWidth, thirdWidth, forthWidth];
    const listImgOpacity = [firstHoverImgOpacity, secondHoverImgOpacity, thirdHoverImgOpacity, forthHoverImgOpacity];
    const listImgTop = [firstHoverImgtop, secondHoverImgtop, thirdHoverImgtop, forthHoverImgtop];

    const [ show, setShow ] = useState(false);

    const { ref: projectRef, inView: projectView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    useEffect(() => {
        setShow(projectView);
    }, [projectView]);

    const { topTable, opacityTable } = useSpring({
        from: {
            topTable: -20,
            opacityTable: 0,
        },
        to: {
            topTable: ( show ) ? 0 :-20,
            opacityTable: ( show ) ? 1 : 0,
        },
        delay: 300,
        config: {
            duration: 800
        }
    });

    const fn = e => {
        e.preventDefault();
        showError('This section is currently in-progress work');
    }

    return (
        <Fragment>
            <div className={styles.project_container}>
                <h3 className={styles.project_title} style={{ backgroundColor: mainBackgroundColor }}>Personal Project Work</h3>
                <animated.div className={styles.project_wapper} style={{ transform: topTable.to(v => `translateY(${v}px)`), opacity: opacityTable.to(v => v) }}>
                    <div ref={projectRef} className={styles.project_table}>
                        <div className={styles.table_topbar}>
                            <p className={styles.first}>No.</p>
                            <p className={styles.second}>Name</p>
                            <p className={styles.third}>Technology</p>
                            <hr color="#b9b9b9" />
                        </div>

                        <div className={styles.table_body}>
                            <div className={styles.tablebody_bars}>
                                <hr color="#b9b9b9" className={styles.first} />
                                <hr color="#b9b9b9" className={styles.second} />
                                <hr color="#b9b9b9" className={styles.third} />
                                <hr color="#b9b9b9" className={styles.forth} />
                            </div>

                            <div className={styles.table_content}>

                                { state.items.map((obj, index) => (
                                    <animated.div className={styles.table_elements} onMouseLeave={() => mouseHoverOut(obj.id)} onMouseEnter={() => mouseHoverIn(obj.id)} key={obj.id}>
                                        <animated.p style={{ color: listTextColors[index].to(v => v), textShadow: listTextShadow[index].to(v => v) }} className={styles.element_title}>{obj.id}</animated.p>
                                        <p className={styles.element_name}><animated.a href={obj.link} style={{ color: listTextColors[index].to(v => v), textShadow: listTextShadow[index].to(v => v) }} target="_blank">{obj.name}</animated.a></p>
                                        <animated.p style={{ color: listTextColors[index].to(v => v), textShadow: listTextShadow[index].to(v => v) }} className={styles.element_category}>{obj.technology}</animated.p>
                                        
                                        <animated.div className={styles.hoverImg} style={{ transform: listImgTop[index].to(v => `translateY(${v}px)`), opacity: listImgOpacity[index].to(v => v), border: `3px solid ${mainBackgroundColor}`, backgroundImage: `url(${obj.img})` }}></animated.div>
                                        
                                        <animated.div style={{ width: listWidth[index].to(v => `${v}%`), backgroundColor: listsBackground[index].to(v => v) }} className={styles.hide_cover}></animated.div>
                                    </animated.div>
                                )) }

                            </div>
                        </div>
                    </div>
                </animated.div>

                <Link href="/"><animated.a className={styles.endText} style={{ backgroundColor: mainBackgroundColor, transform: scaleUP.to(v => `scale(${v})`) }} onMouseDown={() => setDiscoverBtn(true)} onMouseLeave={() => setDiscoverBtn(false)} onClick={e => fn(e)}>Discover all projects</animated.a></Link>
            </div>
        </Fragment>
    );
}

export default Projects;