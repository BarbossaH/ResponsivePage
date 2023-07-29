import Header from './Header';
// import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
