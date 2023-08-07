import Header from './Header';
// import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main
        className="container d-flex justify-content-center vh-100 vw-100"
        // style={{ border: '1px solid red' }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
