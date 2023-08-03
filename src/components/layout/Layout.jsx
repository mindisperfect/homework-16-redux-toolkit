import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <header>

      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
