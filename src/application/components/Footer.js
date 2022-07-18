import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <div className="footer">
            <section className="footer__container">
&nbsp;
            </section>
            <section className="social">
                <a hre="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

            </section>
            <section className="footer__button">
                <a href="">
                    Back to Top
                </a>
            </section>
        </div>
    );
}

export default Footer;