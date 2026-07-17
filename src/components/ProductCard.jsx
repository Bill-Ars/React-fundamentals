function ProductCard({ name, price, ClassName }) {

  return (
    <div className={ClassName}>
      <h2>{name}</h2>

      <p className="price">Price: 
        {price} MT
      </p>

      <button>
        Comprar
      </button>
    </div>
  );
}

export default ProductCard;