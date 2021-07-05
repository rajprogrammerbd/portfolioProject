import Header from "./../components/header";
import AboutME from "./../components/aboutme";
import Projects from "./../components/projects";
import Feature from "./../components/feature";

const Home = props => {
    const colors = ( props.customState.newImplementation === undefined) ? { backgroundColor: props.customState.initial.webBackgroundColor, textColor: props.customState.initial.textColor } : { backgroundColor: props.customState.newImplementation.backgroundColor, textColor: props.customState.newImplementation.color }

    return (
        <>
            <Header colors={colors} />
            <AboutME colors={colors} />
            <Projects colors={colors} />
            <Feature colors={colors} />
        </>
    );
}

export default Home;