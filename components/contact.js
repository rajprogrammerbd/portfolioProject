import styles from "./../stylesheets/contact.module.scss";

function Contact({ colors }) {
    console.log(colors);
    const mainBackgroundColor = ( colors.textColor === "black" ? "#ff4700" : colors.backgroundColor === "#fe4c78" ? "#8ae4ff" : colors.backgroundColor === "#7833C2" ? "#69f0ae" : colors.backgroundColor === "#561d5e" ? "#6c63ff" : colors.backgroundColor === "#7852ff" ? "#00c4ff" : colors.textColor );
    const mainContactBackground =  (colors.backgroundColor === "#fe4c78" ? "#f5164d" : colors.backgroundColor === "#7833C2" ? "#341161" : colors.backgroundColor === "#561d5e" ? "rgb(77 69 208)" : colors.backgroundColor === "#7852ff" ? "rgb(59 37 136)" : "#191919");

    return (
        <>
            <div className={styles.contact_container} style={{ backgroundColor: mainContactBackground }}>
                <div className={styles.wapper}>
                    <div className={styles.left}>
                        <h2 className={styles.left_title}>Get in touch</h2>
                        <p className={styles.description}>If you have any questions, please feel free to drop me a line. If you don't get an answer immediately. I might just be traveling though the middle of nowhere. I'll get back to you as soon as I can. That's a promise!</p>

                        <a href="mailto:rd2249619@gmail.com" style={{ backgroundColor: mainBackgroundColor }} >Write Raj</a>
                    </div>

                    <div className={styles.right}>
                        <h3>Find Raj elsewhere</h3>
                        <hr width="120px" />
                        <ul>
                            <li><a href="https://www.linkedin.com/in/rajprogrammerbd/">Linkedin</a></li>
                            <li><a href="https://twitter.com/rajprogrammerbd">Twitter</a></li>
                            <li><a href="https://rajprogrammerbd.medium.com/">Medium</a></li>
                            <li><a href="https://stackoverflow.com/users/10596051/raj-dutta?tab=profile">Stackoverflow</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;