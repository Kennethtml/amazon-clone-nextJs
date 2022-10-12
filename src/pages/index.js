
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  console.log(products)
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* <h1 className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small ">
        hello
      </h1> */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>

        <ProductFeed products={products}/>
      </main>
    </div>
  );
}
export async function getServerSideProps(context){
  const res = await fetch("https://fakestoreapi.com/products")
  const products =await res.json()

  return {props:{
    products,
  }}

}
