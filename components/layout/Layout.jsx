import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
function Layout(props) {
  return (
    <Fragment>
      <Header data = {props.header}/>
      <main>{props.children}</main>
      <Footer data = {props.footer} />
    </Fragment>
  );
}

export default Layout;
