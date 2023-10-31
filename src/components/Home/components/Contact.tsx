const Contact = () => {
    return (
        <div id='contact' className="contact-container">
            <div className="title">
                <span className="left-divider"></span>
                <p className="title-text">&lt; Contact Me &#47;&gt;</p>
                <span className="right-divider"></span>
            </div>
            <div className="desc">
                <p>Wanna say <span>Hello</span> to me?</p>
                <p>Feel free to <span>connect</span> with me!</p>
            </div>
            <div className="contact-button">
                <a href="mailto:wang146@mcmaster.ca">Hello!</a>
            </div>
        </div>
    )
}

export default Contact