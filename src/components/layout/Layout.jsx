import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <header>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">Products</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
