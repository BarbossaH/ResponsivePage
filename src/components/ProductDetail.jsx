import { useState } from 'react';
import { useCart } from '../context/CartContext';
import toastr from 'toastr';
const ProductDetail = ({ productInfo }) => {
  // console.log(productInfo);
  const sizeText = productInfo.sizeOptions;
  const [size, setSize] = useState('');
  const [isSelect, setIsSelect] = useState([]);
  const [btnIndex, setBtnIndex] = useState(-1);

  const [cart, setCart] = useCart();
  const handleSelect = (e) => {
    const index = e.target.getAttribute('index');
    setBtnIndex(index);
    const selectState = [false, false, false];
    selectState[index] = !isSelect[index];
    setIsSelect(selectState);
    setSize(!isSelect[index] ? sizeText[index].label : '');
  };
  const handleAddToCart = () => {
    if (size) {
      const product = {
        title: productInfo.title,
        price: productInfo.price,
        size: 'S',
        count: 1,
        imageUrl: productInfo.imageURL,
      };
      product.size = sizeText[btnIndex].label;

      const isExistProduct = cart?.find((p) => p.size === product.size);
      let newCart = [...cart];
      if (isExistProduct) {
        isExistProduct.count += 1;
      } else {
        newCart = [...cart, product];
      }
      // console.log(newCart);
      setCart(newCart);
      toastr.success('Add an item to the cart successfully');
    } else {
      toastr.warning('Please select the Size');
    }
  };

  return (
    <div
      className=" row  flex customer"
      // style={{ paddingLeft: '150px', paddingRight: '150px' }}
    >
      <div className="col-md-6">
        <img
          src={productInfo.imageURL}
          className="card-img-top"
          alt={'name'}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div
        className="col-md-6 "
        style={{ textAlign: 'left', fontSize: '18px' }}
      >
        <p className="mt-3">{productInfo.title}</p>
        <p
          className="mt-3"
          style={{
            fontSize: '15px',
            fontWeight: 'bold',
            borderBottom: '0.5px solid #CCCCCC',
            borderTop: '0.5px solid #CCCCCC',
            backgroundColor: '#FFFFFF',
          }}
        >
          {`$ ${productInfo.price}`}
        </p>
        <p className="mt-3 p-1" style={{ color: '#888888', fontSize: '13px' }}>
          {productInfo.description}
        </p>
        <div>
          <div>
            <p
              className="d-inline"
              style={{ color: '#888888', fontSize: '12px', fontWeight: 'bold' }}
            >
              SIZE
            </p>
            <p
              className="text-danger d-inline"
              style={{ color: '#888888', fontSize: '15px' }}
            >
              *
            </p>
            <p
              className="d-inline"
              style={{ fontSize: '15px', paddingLeft: '6px' }}
            >
              {isSelect[btnIndex] && <strong>{size}</strong>}
            </p>

            <div className="row p-2">
              {sizeText.map((t, index) => (
                <div
                  key={t.id}
                  className="btn m-1 sizeButton"
                  onClick={handleSelect}
                  index={index}
                  style={
                    isSelect[index]
                      ? { border: '2px solid #222222', color: '#222222' }
                      : { border: '2px solid #CCCCCC', color: '#CCCCCC' }
                  }
                >
                  {t.label}
                </div>
              ))}
            </div>
            <div
              className="addToCart col-md-5 text-center "
              onClick={handleAddToCart}
            >
              ADD TO CART
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
