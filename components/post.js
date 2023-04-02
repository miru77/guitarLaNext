import Image from "next/image";
import Link from "next/link";
import { formatearfecha } from "@/utils/helpers";
import styles from "../styles/blog.module.css";

export const Post = ({ post }) => {
  const { imagen, contenido, url, titulo, publishedAt } = post;

  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt="imagen de blog"
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearfecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>

        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};
