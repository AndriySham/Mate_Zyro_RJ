import './Hero.css';
import soundWavesIcon from '../../assets/Sound-waves.png';

function Hero() {
  return(
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__wave">
            <img src={soundWavesIcon} alt="Sound wave" />
          </div>
          <h1 className="hero__title">The world shades. <br/> Your music shines.</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;