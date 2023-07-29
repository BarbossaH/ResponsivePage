import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import ProductItem from '../ProductItem';

const Header = () => {
  const [cart] = useCart();
  // console.log(cart);
  let itemTotal = 0;
  cart.forEach((item) => {
    itemTotal += item.count;
  });
  // console.log(itemTotal);
  const [isSelect, setIsSelect] = useState(false);
  const handleClick = () => {
    setIsSelect(!isSelect);
  };
  const selectedStyle = {
    border: '1px solid #CCCCCC',
    borderBottom: '3px solid #ffffff',
    color: '#222222',
    backgroundColor: 'white',
    zIndex: 1,
  };

  return (
    <div className="header">
      <div className="cartInfo">
        <div
          className="myCart"
          onClick={handleClick}
          style={isSelect ? selectedStyle : { border: '', color: '#888888' }}
        >
          My Cart ({itemTotal})
        </div>
        {isSelect && (
          <div className="itemList">{<ProductItem products={cart} />}</div>
        )}
      </div>
    </div>
  );
};
export default Header;
