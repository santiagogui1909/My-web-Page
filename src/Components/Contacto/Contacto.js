import "./Contacto.css";

const Contacto = () => {

    return (

        <>
            <h1 className="titulo-contact" id="contacto">Contacto</h1>
            <div className="container-contact">
                <div className="container-red">
                    <h1 className="titulo-redes">Sigueme</h1>
                    <div className="center">
                        <div className="icon center">
                            <a href=""><span className="icon-facebook"></span></a>
                        </div>
                        <div className="icon center">
                            <a href=""><span className="icon-instagram"></span></a>
                        </div>
                        <div className="icon center">
                            <a href=""><span className="icon-linkedin"></span></a>
                        </div>
                    </div>

                    <div className="info-contacto">
                        <h3>Gmail</h3>
                        <p><span className="icon-gmail"></span>Santiagogui@gmail.com</p>
                    </div>
                    <div className="info-contacto">
                        <h3>Phone</h3>
                        <p><span className="icon-whatsapp"></span>3138409535</p>
                    </div>
                </div>
                <div>
                    <h1 className="titulo-redes">Contactame</h1>
                    <form className="add-form">
                        <div className="form-control">
                            <label>Nombre *</label>
                            <input type="text" placeholder="Ingresa tu nombre" required />
                        </div>

                        <div className="form-control">
                            <label>Correo *</label>
                            <input type="text" placeholder="Ingresa tu correo" required />
                        </div>

                        <div className="form-control">
                            <label for="mensaje">Mensaje *</label>
                            <textarea id="mensaje" name="mensaje" required></textarea>
                        </div>

                        <div className="btn-enviar" >
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Contacto;