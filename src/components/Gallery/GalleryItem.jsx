function GalleryItem({item}) {
  return(
    <div className="gallery__block">
      <div className="gallery__images">
        <div className="gallery__images-wrapper">
          <img src={item.imageFirst} alt={item.altFirs} />
        </div>
        <div className="gallery__images-wrapper">
          <img src={item.imageSecond} alt={item.altSecond} />
        </div>
      </div>
      <h3 className="gallery__content-title">{item.title}</h3>
    </div>
  );
}

export default GalleryItem;
