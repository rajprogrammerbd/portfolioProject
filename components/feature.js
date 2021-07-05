import styles from "./../stylesheets/feature.module.scss";

function Feature() {

    const mainBackgroundColor = ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor );

    return (
        <>
            <div className={styles.feature_work}>
                <h3 className={styles.featured_work_main_title} style={{ backgroundColor: mainBackgroundColor }}>Feature Work</h3>
            </div>
        </>
    );
}

export default Feature;