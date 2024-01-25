import Layout from "../components/layout";
import Featured from "../components/Featured";
import Hero from "../components/hero";
import { useState } from "react";


export default function Home({count,dec,inc}) {
  
  return (
    <Layout count={count} >
        <Hero />
        <Featured />
    </Layout>
  );
}
