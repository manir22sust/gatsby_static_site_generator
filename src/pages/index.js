import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>hello</h1>
      <Link to="/about"> about</Link>
      <Link to="/company/history"> history</Link>
    </Layout>
  );
}
