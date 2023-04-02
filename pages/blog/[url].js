import Image from "next/image";
import styles from "../../styles/blog.module.css";
import Layout from "@/components/layout";
import { formatearfecha } from "@/utils/helpers";

export default function Post({ posts }) {
  const { titulo, contenido, imagen, publishedAt } = posts[0].attributes;

  return (
    <Layout title={titulo}>
      <article className={`${styles.post} ${styles["mt-3"]} `}>
        <Image
          src={imagen.data.attributes.url}
          width={1000}
          height={600}
          alt="imagen de blog"
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearfecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/posts`);

  const { data } = await respuesta.json();

  const paths = data.map((post) => ({
    params: { url: post.attributes.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );

  const { data: posts } = await respuesta.json();

  return {
    props: { posts },
  };
}
