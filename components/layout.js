import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
      </Head>
      <meta name="description" content={description} />

      <Header />

      {children}

      <Footer />
    </>
  );
}
