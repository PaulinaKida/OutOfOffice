import image_szkolenia from '../../../assets/images/1.jpg';
import image_outdoor from '../../../assets/images/8.jpg';
import image_it from '../../../assets/images/11.jpg';
import { Parallax } from 'react-scroll-parallax';

function Offer() {
    return (

        <div className="offer" id="oferta">
            <section className="offer">
                <div className="offer__container">
                    <Parallax className="offer-paralax1" y={[50, -50]} tagOuter="figure">
                    <div className="offer__single offer__single__szkolenia">
                        <img src={image_szkolenia} alt="szkolenia" className='offer__szkolenia_image'/>
                        <div className="offer__text">
                            <h2 className="offer__title">różne<br />szkolenia</h2>
                            <p className="offer__description">
                            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpa
                            </p>
                        </div>
                    </div>
                    </Parallax>

                    <Parallax className="offer-paralax2" y={[20, -20]} tagOuter="figure">
                    <div className="offer__single offer__single__outdoor">
                        <div className="offer__text">
                            <h2 className="offer__title">różny<br />outdoor</h2>
                            <p className="offer__description">
                            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpa
                            </p>
                        </div>
                        <img src={image_outdoor} alt="offer"/>
                    </div>
                    </Parallax>

                    <Parallax className="offer-paralax3" y={[50, -50]} tagOuter="figure">
                    <div className="offer__single offer__single__it">
                        <img src={image_it} alt="offer"/>
                        <div className="offer__text">
                            <h2 className="offer__title">IT<br />jeszcze chwilka</h2>
                            <p className="offer__description">
                            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpa
                            </p>
                        </div>
                    </div>
                    </Parallax>
                </div>
            </section>
            {/*<ul>
                <li><a href="/offer-training">szkolenia</a></li>
                <li><a href="/offer-outdoor">outdoor</a></li>
                <li><a href="/offer-it">IT</a></li>
            </ul>*/}
        </div>
    );
}

export default Offer;
