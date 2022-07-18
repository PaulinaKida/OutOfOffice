import image1 from '../../../assets/images/2.jpg'
import { Parallax } from 'react-scroll-parallax';

function AboutMe() {
    return (
        <Parallax className="aboutme-paralax" y={[50, -50]} tagOuter="figure">
            <div className="about-me" id="omnie">
                <section className="about-me__container">
                    <div className="opening__content">
                        <h2 className="opening__header">POZNAJ NAS</h2>
                        <p className="opening__heading">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                </section>
                <img src={image1} alt="" className="opening__image" />
            </div>
        </Parallax>
    );
}

export default AboutMe;
