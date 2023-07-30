const ProductItem = ({ products }) => {
  // console.log(products);
  return products.length > 0 ? (
    <div className="row">
      <ul>
        {products.map((p) => (
          <li key={p.size} className="row">
            <div className="col-6">
              <img src={p.imageUrl} alt={p.title} style={{ width: '80px' }} />
            </div>

            <div className="col-6" style={{ fontSize: '12px', padding: '0' }}>
              <p style={{ margin: '0' }}>{p.title}</p>
              <p style={{ margin: '0' }}>
                {p.count} * <strong>$ {p.price}</strong>
              </p>
              <p style={{ margin: '0' }}>Size: {p.size}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="col-md-6 p-2">
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: '50%' }}
        />
      </div>
      <div className="col-md-6">2</div> */}
    </div>
  ) : (
    <p>Cart is empty.</p>
  );
};
export default ProductItem;
