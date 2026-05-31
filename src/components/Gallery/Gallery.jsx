import './Gallery.css';
import GalerryItem from './GalleryItem'

import row1Image1 from '../../assets/Beowse-1-1.png';
import row1Image2 from '../../assets/Browse-1-2.png';
import row2Image1 from '../../assets/Browse-2-1.png';
import row2Image2 from '../../assets/Browse-2-2.png';
import row3Image1 from '../../assets/Browse-3-1.png';
import row3Image2 from '../../assets/Browse-3-2.png';
import GalleryItem from './GalleryItem';

const galleries = [
  {
    imageFirst: row1Image1,
    altFirs: "Girl in earbuds",
    imageSecond: row1Image2,
    altSecond: "Girl in headphones",
    title: "Headphones & earbuds"
  },
  {
    imageFirst: row2Image1,
    altFirs: "Speakers",
    imageSecond: row2Image2,
    altSecond: "Speakers",
    title: "Speakers"
  },
  {
    imageFirst: row3Image1,
    altFirs: "Girl in sunglasses",
    imageSecond: row3Image2,
    altSecond: "Boy in sunglasses",
    title: "Audio sunglasses"
  }
];

function Gallery() {
  return(
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__title">Browse Zyro products by category</h2>
        <div className="gallery__content">

        {galleries.map((gallery) => (
          <GalleryItem key={gallery.title} item={gallery} />
        ))}

        </div>
      </div>
    </section>
  );
}

export default Gallery;