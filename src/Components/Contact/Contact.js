import "./Contact.css";

const Contact = () => {

    return (

        <>
            <h2 className="title-contact" id="contact">contact</h2>
            <header className="container-contact">
                <article className="container-red">
                    <h3 className="title-redes">sigueme</h3>
                    <section className="center">
                        <div className="icon center">
                            <a href="https://github.com/santiagogui1909" target="_blank" rel="noreferrer"><span className="icon-github-circled"></span></a>
                        </div>
                        <div className="icon center">
                            <a href="https://www.instagram.com/santiagogr19/" target="_blank" rel="noreferrer"><span className="icon-instagram"></span></a>
                        </div>
                        <div className="icon center">
                            <a href="https://www.linkedin.com/in/santiago-guillen-ramirez-b162211a7/" target="_blank" rel="noreferrer"><span className="icon-linkedin"></span></a>
                        </div>
                    </section>

                    <section className="info-contact">
                        <h4>email</h4>
                        <p><span className="icon-gmail"></span>santiagogui@gmail.com</p>
                    </section>
                    <section className="info-contact">
                        <h4>phone</h4>
                        <p><span className="icon-whatsapp"></span>3138409535</p>
                    </section>
                </article>
                <article>
                    <h3 className="title-redes">contact me</h3>
                    <form className="add-form">
                        <div className="form-control">
                            <label>name *</label>
                            <input type="text" placeholder="Enter your name" required />
                        </div>

                        <div className="form-control">
                            <label>mail *</label>
                            <input type="text" placeholder="Enter your email" required />
                        </div>

                        <div className="form-control">
                            <label for="mensaje">message *</label>
                            <textarea id="mensaje" name="mensaje"  placeholder="Leave your message" required></textarea>
                        </div>

                        <div className="btn-enviar" >
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </article>
            </header>
        </>
    )

}

export default Contact;