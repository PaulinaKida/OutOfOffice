import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.name = React.createRef();
        this.email = React.createRef();
        this.consent = React.createRef();
    }

    onChange(value) {
        console.log("Captcha value:", value);
    }

    onSubmit(event) {
        const target = event.target;
        let name = this.name.current.value;
        let email = this.name.current.value;
        let consent = this.consent.current.type === 'checkbox' ? this.consent.current.checked : this.consent.current.value;
        /**
         * drorobic wysyłkę maila
         */
        console.log(name, email, consent)
        event.preventDefault();
    }

    render() {
        return(<>
            <div className="contact">
                <section className="contact container" id="contact">

                    <div className="contact__column">
                        <h2 className="contact__title">ZAPRASZAMY DO WSPÓŁPRACY</h2>
                        <p className="contact__instruction">
                            skontaktuj się z nami lub pozostaw wiadomość, a my skontaktujemy się z Tobą, jeśli będzie nam się chciało
                        </p>
                        <div className="contact__details">
                            <a href="tel:+48 663126234" className="details__item">
                                <FontAwesomeIcon icon={faPhoneAlt} />&nbsp;+48 663 126 234
                            </a>
                        </div>
                    </div>

                    <div className="contact__column">
                        <form className="form" onSubmit={this.onSubmit}>
                            <div className="form__field">
                                <label className="form__label" htmlFor="name">Imię</label>
                                <input type="text" className="form__input name" id="name" ref={this.name} />
                            </div>

                            <div className="form__field">
                                <label className="form__label" htmlFor="email">E-mail</label>
                                <input type="email" className="form__input email" id="email" ref={this.email} />
                            </div>

                            <div className="form__consent">
                                <label className="form__checkbox">


                                    <label className="consent__text">
                                        <span className="checkbox">
                                            <input type="checkbox" ref={this.consent} id="consent" />
                                        </span>
                                        Informujemy, iż Pani/Pana dane osobowe przekazane nam
                                        za pośrednictwem poczty elektronicznej są przetwarzane
                                        w celu prowadzenia korespondencji z Państwem i w celu,
                                        dla którego zostały nam udostępnione. No może czasem przekazujemy
                                        je do prowidentu. Jeśli jesteś odpowiednio bogaty.
                                    </label>
                                </label>
                            </div>
                            <button type="submit" className="btn btn--primary">WYŚLIJ</button>
                            <ReCAPTCHA
                                sitekey="6LdRJZsbAAAAAJoSeXfXQmdnWSAGriQlDmy5CMFs"
                                onChange={this.onChange}
                                badge="inline"
                            />
                        </form>
                    </div>

                </section>
            </div>
            <div className="contact__image">
                &nbsp;
            </div>
        </>
        )}
}

export default Contact;