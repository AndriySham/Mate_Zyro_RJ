function ProductCard({product}){
  return(
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt="product_card" />
      </div>
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__description">{product.description}</p>
      <p className="product-card__price">{product.price}</p>
    </div>
  );
}

export default ProductCard;