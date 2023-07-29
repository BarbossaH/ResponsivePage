import ProductDetail from '../ProductDetail';
import Layout from '../Layout/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [productInfo, setProductInfo] = useState();
  const getProduct = async () => {
    const { data } = await axios.get(
      'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
    );
    if (data) {
      setProductInfo(data);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Layout>
      <main className="row ">
        {productInfo && <ProductDetail productInfo={productInfo} />}
      </main>
    </Layout>
  );
};
export default HomePage;
