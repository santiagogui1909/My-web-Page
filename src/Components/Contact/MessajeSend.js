import imgSend from '../../media/send.png';

const MessajeSend = () => {

    return (
        <div className="container-messaje">
            <section className="box-messaje">
                <header className="title-message">
                    <h2>message sent</h2>
                </header>
                <a href="/" className="btn-back">return</a>
                <section className="imgSend">
                    <img src={imgSend} />
                </section>
            </section>
        </div>
    );
};

export default MessajeSend;