import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
const history = () => {
  return (
    <Layout>
      <h1> history </h1>
      <Link to="/"> Back to Home Page</Link>
    </Layout>
  );
};

export default history;
