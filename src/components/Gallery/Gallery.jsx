import './Gallery.css';

import row1Image1 from '../../assets/Beowse-1-1.png';
import row1Image2 from '../../assets/Browse-1-2.png';
import row2Image1 from '../../assets/Browse-2-1.png';
import row2Image2 from '../../assets/Browse-2-2.png';
import row3Image1 from '../../assets/Browse-3-1.png';
import row3Image2 from '../../assets/Browse-3-2.png';

function Gallery() {
  return(
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__title">Browse Zyro products by category</h2>
        <div className="gallery__content">

          <div className="gallery__block">
            <div className="gallery__images">
              <div className="gallery__images-wrapper">
                <img src={row1Image1} alt="Girl in earbuds" />
              </div>
              <div className="gallery__images-wrapper">
                <img src={row1Image2} alt="Girl in headphones" />
              </div>
            </div>
            <h3 className="gallery__content-title">Headphones & earbuds</h3>
          </div>

          <div className="gallery__block">
            <div className="gallery__images">
              <div className="gallery__images-wrapper">
                <img src={row2Image1} alt="Speakers" />
              </div>
              <div className="gallery__images-wrapper">
                <img src={row2Image2} alt="Speakers" />
              </div>
            </div>
            <h3 className="gallery__content-title">Speakers</h3>         
          </div>

          <div className="gallery__block">
            <div className="gallery__images">
              <div className="gallery__images-wrapper">
                <img src={row3Image1} alt="Girl in sunglasses" />
              </div>
              <div className="gallery__images-wrapper">
                <img src={row3Image2} alt="Boy in sunglasses" />
              </div>
            </div>
            <h3 className="gallery__content-title">Audio sunglasses</h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Gallery;