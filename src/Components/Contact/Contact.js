import { useState } from 'react';
import { useForm } from '@formspree/react';
import MessajeSend from './MessajeSend';
import Alert from './Alert';
import "./Contact.css";

const Contact = () => {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputText, setInputText] = useState("");
    const [verify, setVerify] = useState(false);
    const [sendCorrect, setSendCorrect] = useState(false);
    const [messageAlert, setMessageAlert] = useState(" ");
    const [changeClass, setChangeClass] = useState(true);
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [getArray, setArray] = useState([]);
    const [close, setClose] = useState(false);

    // state of form
    const [state, handleSubmit] = useForm("mleayalv");

    if (state.succeeded) {
        return <MessajeSend />;
    }

    const array = [];

    const getName = (e) => {
        let name = e.target.value;
        setInputName(name);
    }

    const getEmail = (e) => {
        let email = e.target.value;
        validateMail(email);
        setInputEmail(email);
    }

    const getText = (e) => {
        let text = e.target.value;
        setInputText(text);
    }

    const checkSubmit = (e) => {
        e.preventDefault();
        verifyValues(inputName, inputEmail, inputText);
        setArray(array);
        setVerify(true);

        if (inputName !== "" && inputEmail !== "" && inputText !== ""){
            setSendCorrect(true);
        }
    }

    const verifyValues = (inputName, inputEmail, inputText) => {
        (inputName === "") ? array.push("1") : array.push("2");
        (inputEmail === "") ? array.push("3") : array.push("4");
        (inputText === "") ? array.push("5") : array.push("6");
    }

    const validateMail = (email) => {
        let result = regexEmail.test(email);

        if (result === true) {
            setMessageAlert("The email is valid");
            setChangeClass(true);
        } else {
            setMessageAlert("It is not a valid email");
            setChangeClass(false);
        }
    }

    const closeMessage = () => {
        setVerify(false);
        setClose(true);
    }

    return (
        <>
            <h2 className="title-contact" id="contact">contact</h2>
            <header className="container-contact">
                <article className="container-red">
                    <h3 className="title-redes">follow me</h3>
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
                        <p><span className="icon-gmail"></span>devsantiagogui@gmail.com</p>
                    </section>
                    <section className="info-contact">
                        <h4>phone</h4>
                        <p><span className="icon-whatsapp"></span>3138409535</p>
                    </section>
                </article>

                {verify ?
                    <div className={close === true ? "containerAlert" : "containerAlert"}>
                        <section className="mensaje_modal">
                            <Alert value={getArray} />
                            <span className="btnClose" onClick={closeMessage}>Close</span>
                        </section>
                    </div>
                    :
                    null
                }

                <article>
                    <h3 className="title-redes">contact me</h3>
                    <form  className="add-form" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label>name</label>
                            <input type="text" onChange={getName} name="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-control">
                            <label>mail</label>
                            <input type="text" onChange={getEmail} name="email" placeholder="Enter your email" />
                        </div>
                        <section className="alertEmail">
                            <label className={changeClass ? "alertGood" : "alertError"}>{messageAlert}</label>
                        </section>
                        <div className="form-control">
                            <label for="mensaje">message</label>
                            <textarea id="mensaje" onChange={getText} name="messaje" placeholder="Leave your message"></textarea>
                        </div>

                        <div className="btn-enviar" >
                            { sendCorrect === true ?
                                <input onSubmit={checkSubmit} type="submit" value="send" />
                                :
                                <input onClick={checkSubmit} type="submit" value="verify" disabled={state.submitting} />
                            }
                        </div>
                    </form>
                </article>
            </header>
        </>
    )

}

export default Contact;